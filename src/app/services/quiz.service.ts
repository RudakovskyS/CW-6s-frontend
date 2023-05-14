import { Injectable } from '@angular/core';
import { PostingQuestionDto } from '../dto/post.question.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../dto/question.dto';
import { Answer } from '../dto/answer.dto';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  
  constructor(private http: HttpClient) { }

  createQuestion(payload: PostingQuestionDto){
    return this.http.post('http://localhost:3000/api/quiz', payload);
  }

  getRandomQuestion() : Observable<any>{
    return this.http.get('http://localhost:3000/api/quiz/random');
  }

  checkAnswer(question: Question, answer: Answer) {
    return this.http.post(`http://localhost:3000/api/quiz/${question.question_id}/answer`, {answer: answer.content});

  }
}
