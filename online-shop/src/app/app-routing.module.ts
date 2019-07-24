import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
