import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1,'Lord Of The Rings',60,'Set of three books', 'assets/images/l1.jpg', 'An epic fantasy adventure following Frodo Baggins and his companions as they journey to destroy the One Ring and defeat the dark lord Sauron. A timeless tale of heroism, friendship, and destiny in Middle-earth', 'J.R.R. Tolkien'),
    new Product(2,'Harry Potter',100,'Set of eight books', 'assets/images/h1.jpg', 'Step into the magical world of Hogwarts with Harry Potter as he discovers his true destiny, battles dark forces, and unravels the secrets of the wizarding world. A spellbinding tale of friendship, bravery, and adventure.',' J.K. Rowling'),
    new Product(3,'Game Of Thrones',45,'Set od two books', 'assets/images/g1.webp','A gripping tale of power, betrayal, and war in the Seven Kingdoms, where noble houses clash for the Iron Throne. In this brutal world of politics and prophecy, no one is safe, and winter is always coming.','George R.R. Martin'),
    new Product(4,'Dune',80,'Set of four books', 'assets/images/d1.jpg','A sci-fi masterpiece set on the desert planet Arrakis, where Paul Atreides must navigate political intrigue, war, and prophecy in his journey to become the leader of a new world order. A visionary tale of power, survival, and destiny.','Frank Herbert'),

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
