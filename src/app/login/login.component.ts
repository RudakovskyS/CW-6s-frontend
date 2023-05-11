import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService){}
  
  
  checkCredentials(){
    console.log(this.username, this.password);
      this.authService.sendCredentials(this.username, this.password).subscribe((data: any) => {
        console.log(data.access_token);
        window.sessionStorage.setItem('access_token', data.access_token);
        this.username = ''
        this.password = ''
      })
  }

  username!: string;
  password!: string;
}
