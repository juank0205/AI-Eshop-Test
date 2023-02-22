import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//Products interface
export interface Product {
  id?: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  // CREATE
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
      .pipe(
        catchError(error => {
          console.log('Error creating product:', error);
          throw error;
        })
      );
  }

  // READ
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.log('Error getting all products:', error);
          throw error;
        })
      );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => {
          console.log(`Error getting product with ID ${id}:`, error);
          throw error;
        })
      );
  }

  // UPDATE
  update(id: number, updates: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, updates)
      .pipe(
        catchError(error => {
          console.log(`Error updating product with ID ${id}:`, error);
          throw error;
        })
      );
  }

  // DELETE
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => {
          console.log(`Error deleting product with ID ${id}:`, error);
          throw error;
        })
      );
  }
}
