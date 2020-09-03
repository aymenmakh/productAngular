import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductCardComponent } from '../product-card/product-card.component';



@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  @ViewChild(ProductListComponent)
  productList : ProductListComponent;


  @ViewChild(ProductCardComponent)
  productCard : ProductCardComponent;

  

  ngOnInit(): void {
  }

  addProduct(p: Product): void {
    console.log(p);
    this.productList.produits.push(p);
    
    
  }







}
