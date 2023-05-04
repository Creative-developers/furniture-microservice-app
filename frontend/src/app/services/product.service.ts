import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/Product.model'
import { environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  private apiUrl = environment.PRODUCTS_API_URL;

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  createProduct(product: FormData) {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }
}
