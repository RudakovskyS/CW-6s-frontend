import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  constructor(private router: Router){}
questionText: string = '';
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
    console.log(this.payload);
    
    this.payload.question = '';
    this.answers = [{ text: '' }];
  }

  redirectToHomePage(){
    this.router.navigate([``]);
  }
  payload: Payload = {question: '', answers: []}
}

interface Answer {
  text: string;
}

class Payload{
  question: string = ''
  answers: string[] = []
}
