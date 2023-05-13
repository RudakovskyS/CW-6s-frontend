import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getUserPosts(id: number) : Observable<any>{
    return this.http.get(`http://localhost:3000/api/users/${id}`)
  }
}
