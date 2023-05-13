import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentSectionService {
  
  constructor(private http: HttpClient) {}

  sendComment(commentContent: string, id: number) {
    return this.http.post(`http://localhost:3000/api/comments/${id}`, {content: commentContent})
  }
  getCommentsForPost(id: number) : Observable<any>{
    return this.http.get(`http://localhost:3000/api/comments/post/${id}`)
  }

  deleteComment(id: number) {
    return this.http.delete(`http://localhost:3000/api/comments/${id}`)
  }
}
