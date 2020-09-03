import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output() newProduct = new EventEmitter<Product>();


  product = new Product();

  productForm : FormGroup;


  constructor( ) {
   
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
    this.newProduct.emit(
      this.product
    );
  }

}
