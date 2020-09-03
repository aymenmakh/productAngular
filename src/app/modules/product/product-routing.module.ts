import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';

const routes: Routes = [
  {path : 'card', component :ProductCardComponent},
  {path : 'dashboard', component :ProductDashboardComponent},
  {path : 'form', component :ProductFormComponent},
  {path : 'list', component :ProductListComponent},
  {path : '', component :ProductDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
