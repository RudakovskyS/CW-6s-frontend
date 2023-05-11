import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService){}
  
  checkCredentials(){
    console.log(this.username, this.password);
      this.authService.sendCredentials(this.username, this.password).subscribe(data => {
        console.log(data);
      })
  }

  username!: string;
  password!: string;
}
