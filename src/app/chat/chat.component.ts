import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket, io } from 'socket.io-client';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService){}
  private socket!: Socket;
  messages: any[] = [];
  newMessage!: string
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser()
    if (!this.currentUser?.username){
      this.currentUser = {username: 'ананімны карыстальнік'}
    }
    this.socket = io('http://localhost:3000', {
      transports: ['websocket'],
				withCredentials: true,
				extraHeaders: {
					'Access-Control-Allow-Origin': 'http://localhost:4200'
				}
    });

    this.socket.on('connect', () => {
      console.log('Connected to the server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });

    this.socket.on('chatMessage', (message: any) => {
      this.messages.push(message) 
    });
  }

  redirectToHomePage() {
    this.router.navigate([``]);
  }

  sendMessage(username:string, message: string) {
    this.socket.emit('chatMessage', {username: username, message: message});
  }

  currentUser: any;
}
