import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListingComponent } from './pages/products/products.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'

const routes: Routes = [
  { path:'', component: ProductsListingComponent },
  { path:'products/:id', component: ProductDetailComponent },
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
