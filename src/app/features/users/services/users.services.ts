import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserDto, User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly api = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  create(dto: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.api, dto)
  }
}
