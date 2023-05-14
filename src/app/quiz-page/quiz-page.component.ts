import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostingQuestionDto } from '../dto/post.question.dto';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit{
  constructor(private router: Router, private quizService: QuizService){}
  
  ngOnInit(): void {
    this.payload.question = '';
    this.answers = [{ text: '' }];
  }
  answers: Answer[] = [{ text: '' }];

  addAnswer() {
    this.answers.push({ text: '' });
  }

  removeAnswer(index: number) {
    this.answers.splice(index, 1);
  }

  saveQuestion() {
    this.answers.map(answer => {
      this.payload.answers.push(answer.text)
    })
    this.quizService.createQuestion(this.payload).subscribe(() =>{
      this.ngOnInit()
    })
  }

  redirectToHomePage(){
    this.router.navigate([``]);
  }
  payload: PostingQuestionDto = {question: '', answers: []}
}

interface Answer {
  text: string;
}

