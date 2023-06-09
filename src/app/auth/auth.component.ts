import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.isLogin = true
    this.buttonText = 'НЯМА АКАУНТУ? РЭГІСТРУЙСЯ!'
  }
  isLogin!: boolean
  buttonText!: string
  changeMode() {
    this.isLogin = !this.isLogin
    this.isLogin ? this.buttonText = 'НЯМА АКАУНТУ? РЭГІСТРУЙСЯ!' : this.buttonText = 'ЁСЦЬ АКАУНТ?'
  }
}
