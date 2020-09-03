import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() suppProduct = new EventEmitter<Product>();


  constructor() { }

  ngOnInit(): void {
  }


  supprimer(name :string) : void{
    console.log(this.product);
    this.suppProduct.emit(
      this.product
    );
  }

}
