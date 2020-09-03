import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductCardComponent, ProductListComponent, ProductFormComponent, ProductDashboardComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,

  ]
})
export class ProductModule { }
