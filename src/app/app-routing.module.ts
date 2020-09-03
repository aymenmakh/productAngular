import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path : 'product' , loadChildren : ()=>import('./modules/product/product.module').then(m=>m.ProductModule)},
  {path : '**', component:PageNotFoundComponent},
  {path : '', component:HomeComponent},
  {path : 'cart', loadChildren : ()=>import('./modules/cart/cart.module').then(m=>m.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
