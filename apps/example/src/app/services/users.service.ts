import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  getUsers() {
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/usersa`); //wrong path
  }
}


export interface User{}