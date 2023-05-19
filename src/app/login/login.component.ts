import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.errorMessage = ''
  }

  checkCredentials() {
    try {
      this.authService.sendCredentials(this.username, this.password).subscribe((data: any) => {
        window.sessionStorage.setItem('access_token', data.access_token);
        this.username = ''
        this.password = ''
        this.router.navigate(['']);
        
        return;
      }, error => {
        this.errorMessage = 'Памылковыя дадзеныя'
      })
    } catch (error) {
      console.log(error);
      
    }
    
  }
  errorMessage?: string
  username!: string;
  password!: string;
}
