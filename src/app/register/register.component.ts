import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService){}

  registerUser(){
    console.log(this.username, this.password);
      this.authService.registerUser(this.username, this.password).subscribe(data => {})
  }

  username!: string;
  password!: string;
}
