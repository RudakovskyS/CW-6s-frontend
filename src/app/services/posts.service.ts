import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  deletePost(post_id: number) {
    return this.http.delete(`https://localhost:3000/api/posts/${post_id}`)
  }

  getUserPosts(user_id: number): Observable<any> {
    return this.http.get(`https://localhost:3000/api/posts/user/${user_id}`)
  }

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get('https://localhost:3000/api/posts');
  }

  getPost(post_id: number): Observable<any> {
    return this.http.get(`https://localhost:3000/api/posts/${post_id}`)
  }

  getTopicPosts(topic_id: number): Observable<any> {
    return this.http.get(`https://localhost:3000/api/posts/topic/${topic_id}`)
  }

  likePost(id: number) {
    return this.http.post(`https://localhost:3000/api/posts/${id}/like`, {});
  }

  dislikePost(id: number) {
    return this.http.post(`https://localhost:3000/api/posts/${id}/dislike`, {});
  }

  postPost(title: string, content: string, topic_id: number) {
    return this.http.post('https://localhost:3000/api/posts', { title: title, content: content, topic_id: topic_id })
  }
}
