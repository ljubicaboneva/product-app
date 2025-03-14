import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1,'Lord Of The Rings',60,'Set of three books'),
    new Product(2,'Harry Potter',100,'Set of eight books'),
    new Product(3,'Game Of Thrones',45,'Set od two books'),
    new Product(4,'Dune',80,'Set of 4 books'),

  ]
  
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product); // Returns an Observable containing a single product
  }


}
