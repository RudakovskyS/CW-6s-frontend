import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void {
    this.errorMessage = ''
    this.successMessage = ''
  }
  constructor(private authService: AuthService) { }

  registerUser() {
    try {
      this.authService.registerUser(this.username, this.password).subscribe(data => {
        this.username = ""
        this.password = ""
        this.successMessage = 'Паспяховая рэгістрацыя'

      }, err => {
        this.errorMessage = 'Памылка пад час рэгістрацыі'
      })
      
    } catch (error) {
    }
    
  }

  successMessage?: string;
  errorMessage?: string;
  username!: string;
  password!: string;
}
