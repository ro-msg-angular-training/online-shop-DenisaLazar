import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SmartProductListComponent } from './smart-product-list/smart-product-list.component';
import { SmartProductDetailsComponent } from './smart-product-details/smart-product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    SmartProductListComponent,
    SmartProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
