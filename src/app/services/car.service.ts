import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Car {
  name: string;
  make: string;
  model: string;
  year: number;
  image_url: string;
  description: string;
  short: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = 'http://localhost:3001/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}`);
  }

  getCarByName(name: string): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/${name}`);
  }

  getCarsByMake(make: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/make/${make}`);
  }

  getCarsByYear(year: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/year/${year}`);
  }
}
