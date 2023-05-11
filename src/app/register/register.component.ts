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
      this.authService.registerUser(this.username, this.password).subscribe()
      this.username = ""
      this.password = ""
  }

  username!: string;
  password!: string;
}
