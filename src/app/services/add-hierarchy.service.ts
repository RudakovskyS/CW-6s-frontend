import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddHierarchyService {

  constructor(private http: HttpClient) { }

  addTopic(category_id: number, name: string) {
    return this.http.post(`http://localhost:3000/api/topics/${category_id}`, {name})
  }

  addCategory(name: string){
    return this.http.post(`http://localhost:3000/api/categories`, {name})
  }
}