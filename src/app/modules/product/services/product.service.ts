import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product';
import { environment} from 'src/environments/environment'
import { Observable} from 'rxjs';
const endpoint = '/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http : HttpClient) { }

  getProductPromise () : Promise<Product[]> {
      return this.http.get<Product[]>(environment.baseUrl+endpoint).toPromise();      
  }

  simple() : void{
    const ob = new Observable(Subscriber=>{
      setTimeout(()=>{
        Subscriber.next(1)},3000);
      setTimeout(()=>{
        Subscriber.next(2)},5000);
      });
  }

  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl+endpoint);    

  }

  createProduit(p:Product): Observable<Product> {
    const myDummyProduct = Object.assign({ id: p.price }, p);
    return this.http.post<Product>(environment.baseUrl+endpoint,myDummyProduct);    
  }

}
