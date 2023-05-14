import { Injectable } from '@angular/core';
import { PostingQuestionDto } from '../dto/post.question.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  createQuestion(payload: PostingQuestionDto){
    return this.http.post('http://localhost:3000/api/quiz', payload);
  }
}
