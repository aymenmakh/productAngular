import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output() newProduct = new EventEmitter<Product>();


  product = new Product();

  productForm : FormGroup;


  constructor( private service : ProductService) {
   
   }

  ngOnInit(): void {
    this.initForm();

  }

  initForm() :void{
    this.productForm = new FormGroup ({
      name : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required,Validators.min(2)]),
    });
  }

  submitProduct(): void {
    console.log('submitProduct');
    this.product = this.productForm.getRawValue();
    this.service.createProduit(this.product).subscribe(
      createProduit => this.newProduct.emit(createProduit)
    );
 
  }

}
