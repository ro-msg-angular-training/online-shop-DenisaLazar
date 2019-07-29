import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  editForm: FormGroup;


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:radix
    this.productService.getProduct(parseInt(id)).subscribe(product => this.product = product);
    this.editForm = this.fb.group({
      name: '',
      category: '',
      price: '',
      image: '',
      description: ''
    });
  }

  onSubmit() {
    window.alert('Are you sure you want to submit your changes?');
    this.product.name = this.editForm.get('name').value;
    this.product.category = this.editForm.get('category').value;
    this.product.image = this.editForm.get('image').value;
    this.product.price = this.editForm.get('price').value;
    this.product.description = this.editForm.get('description').value;
    this.productService.updateProduct(this.product.id, this.product);
    this.editForm.reset();
  }

  reset() {
    window.alert('Are you sure you want to cancel?');
    this.router.navigate(['/products/' + this.product.id], {});
  }
}


