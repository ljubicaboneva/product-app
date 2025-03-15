import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1,'Lord Of The Rings',60,'Set of three books', 'https://ew.com/thmb/qqofw2-fYfIwaXB2eGSA3xbB7h4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/image-tout-5741441aeb5f4a46856513f92e182914.jpg', 'An epic fantasy adventure following Frodo Baggins and his companions as they journey to destroy the One Ring and defeat the dark lord Sauron. A timeless tale of heroism, friendship, and destiny in Middle-earth', 'J.R.R. Tolkien'),
    new Product(2,'Harry Potter',100,'Set of eight books', 'https://www.demon-media.co.uk/wp-content/uploads/2022/02/Harry-Potter.jpg', 'Step into the magical world of Hogwarts with Harry Potter as he discovers his true destiny, battles dark forces, and unravels the secrets of the wizarding world. A spellbinding tale of friendship, bravery, and adventure.',' J.K. Rowling'),
    new Product(3,'Game Of Thrones',45,'Set od two books', 'https://static.hbo.com/game-of-thrones-1-1920x1080.jpg','A gripping tale of power, betrayal, and war in the Seven Kingdoms, where noble houses clash for the Iron Throne. In this brutal world of politics and prophecy, no one is safe, and winter is always coming.','George R.R. Martin'),
    new Product(4,'Dune',80,'Set of four books', 'https://ntvb.tmsimg.com/assets/p16645155_v_h8_ae.jpg?w=960&h=540','A sci-fi masterpiece set on the desert planet Arrakis, where Paul Atreides must navigate political intrigue, war, and prophecy in his journey to become the leader of a new world order. A visionary tale of power, survival, and destiny.','Frank Herbert'),

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
