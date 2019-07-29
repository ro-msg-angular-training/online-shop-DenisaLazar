import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Product} from '../models/product';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  addForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      id: '',
      name: '',
      category: '',
      price: '',
      image: '',
      description: ''
    });
  }

  // adds a new product
  onSubmit() {
    const product: Product = new Product();
    product.id = this.addForm.get('id').value;
    product.name = this.addForm.get('name').value;
    product.category = this.addForm.get('category').value;
    product.image = this.addForm.get('image').value;
    product.price = this.addForm.get('price').value;
    product.description = this.addForm.get('description').value;
    this.productService.createNewProduct(product);
    this.router.navigate(['/products'], {});
  }

  cancel() {
    this.addForm.reset();
    this.router.navigate(['/products'], {});
  }

}
