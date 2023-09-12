import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  save(product: Product):  Observable<Product>{
    return this.http.post<Product>("http://localhost:3000/products", product);
  }

}
