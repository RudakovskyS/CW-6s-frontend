import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentSectionService {
  constructor(private http: HttpClient) {}
  getCommentsForPost(id: number) : Observable<any>{
    return this.http.get(`http://localhost:3000/api/comments/post/${id}`)
  }

}
