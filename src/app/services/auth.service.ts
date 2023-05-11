import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  sendCredentials(username: string, password: string){
    return this.http.post("http://localhost:3000/api/auth/login", {username: username, password: password})
  }

  registerUser(username: string, password: string){
    return this.http.post("http://localhost:3000/api/auth/signup", {username: username, password: password})
  }

  getToken(){
    return window.sessionStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }

  logout(){
    window.sessionStorage.clear();
  }
}
