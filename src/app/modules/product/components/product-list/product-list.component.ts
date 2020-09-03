import { Component, OnInit, Input, Output } from '@angular/core';
import {Product} from '../../models/product'
import {PRODUCTS} from '../../mocks/product.mocks'
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

   produits : Product[];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.produits = PRODUCTS;
    this.loadProdcutPromise();
    this.loadProduct();
  }

  loadProdcutPromise() : void {
    this.service.getProductPromise().then(
      data => console.log(data)
    )
  }

  loadProduct() : void{
    this.service.getproducts().subscribe(
      data => this.produits = data,
      err => console.log("error from observerable")
    )
  }

  remove(p:Product) : void{
    let index = this.produits.findIndex(x => x.name === p.name);
    this.produits.splice(index,1);
  }

  

 

}
