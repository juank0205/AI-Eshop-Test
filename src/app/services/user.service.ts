import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  username: string;
  password: string;
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3001/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  login(username: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/${username}/${password}`);
  }

  signup(username:String, password:String): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, {username, password});
  }
}
