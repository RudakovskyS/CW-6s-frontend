import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  
  

  constructor(private http: HttpClient) { }

  getAllPosts() : Observable<any>{
    return this.http.get('http://localhost:3000/api/posts');
  }

  getPost(post_id: number) : Observable<any>{
    return this.http.get(`http://localhost:3000/api/posts/${post_id}`)
  }

  getTopicPosts(topic_id: number) : Observable<any> {
    return this.http.get(`http://localhost:3000/api/posts/topic/${topic_id}`)
  }

  async likePost (id: number) {
    console.log(id);
    return this.http.post(`http://localhost:3000/api/posts/${id}/like`, {});
  }

  async dislikePost(id: number) {
   this.http.post(`http://localhost:3000/api/posts/${id}/dislike`, {});
  }


}
