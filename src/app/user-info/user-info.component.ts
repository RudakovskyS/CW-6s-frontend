import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../dto/user.dto';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const url = this.route.snapshot.url.map(segment => segment.path).join('/');
    let id = 0;

    if (url.startsWith('user/')) {
      this.route.params.subscribe(params => {
        id = params['id']
        this.userService.getUserPosts(id).subscribe((data: User) =>
          this.user = data)
      })
    }
  }
  user!: User
}
