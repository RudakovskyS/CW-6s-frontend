import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
import { PostingQuestionDto } from '../dto/post.question.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  constructor(private router: Router, private quizService: QuizService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser()
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
    this.quizService.createQuestion(this.payload).subscribe(() => {
      this.ngOnInit()
    })
  }

  redirectToHomePage() {
    this.router.navigate([``]);
  }
  payload: PostingQuestionDto = { question: '', answers: [] }
  currentUser?: any;
  isLoggedIn!: boolean;

}

interface Answer {
  text: string;
}
