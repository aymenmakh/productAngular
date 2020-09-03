import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product';
import { environment} from 'src/environments/environment'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProductPromise () : Promise<Product[]> {
      return this.http.get<Product[]>(environment.baseUrl+"/products").toPromise();      
  }

  simple() : void{
    const ob = new Observable(Subscriber=>{
      setTimeout(()=>{
        Subscriber.next(1)},3000);
      setTimeout(()=>{
        Subscriber.next(2)},5000);
      });
  }

  getproducts():Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl+"/products");    

  }
}
