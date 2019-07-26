import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SmartProductDetailsComponent} from './smart-product-details/smart-product-details.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: SmartProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

