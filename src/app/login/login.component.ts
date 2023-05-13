import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router){}
  
  
  checkCredentials(){
    console.log(this.username, this.password);
      this.authService.sendCredentials(this.username, this.password).subscribe((data: any) => {
        window.sessionStorage.setItem('access_token', data.access_token);
        this.username = ''
        this.password = ''
        this.router.navigate(['']);

      })
  }

  username!: string;
  password!: string;
}
