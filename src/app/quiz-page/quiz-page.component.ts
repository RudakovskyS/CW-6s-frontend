import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Question } from '../dto/question.dto';
import { Answer } from '../dto/answer.dto';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit{
  constructor(private router: Router, private quizService: QuizService ){}
  
  ngOnInit(): void {
    this.quizService.getRandomQuestion().subscribe((data: Question) => {
      this.randomQuestion = data
      this.randomQuestion.answers = this.randomQuestion.answers.sort(() => Math.random() - 0.5);
    })
  }

  checkAnswer(question: Question, answer: Answer){
    this.quizService.checkAnswer(question, answer).subscribe((data: any) => {
      this.isAnswerCorrect = data.isCorrect
      this.isAnswered = true;
    })
    return false
  }
  nextQuestion(){
    location.reload()
  }
  isAnswered: boolean = false;
  isAnswerCorrect?: boolean;
  randomQuestion!: Question;
  redirectToHomePage(){
    this.router.navigate([``]);
  }
}
