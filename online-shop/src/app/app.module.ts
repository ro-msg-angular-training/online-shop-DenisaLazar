import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SmartProductDetailsComponent } from './smart-product-details/smart-product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FieldsNotEmptyDirective } from './validators/fields-not-empty.directive';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    SmartProductDetailsComponent,
    CartComponent,
    ProductEditComponent,
    FieldsNotEmptyDirective,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
