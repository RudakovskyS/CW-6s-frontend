import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get('https://localhost:3000/api/categories')
  }
}
