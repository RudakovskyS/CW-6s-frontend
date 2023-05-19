import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../dto/post.dto';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService, private router: Router,
    private route: ActivatedRoute, private authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const url = this.route.snapshot.url.map(segment => segment.path).join('/');
    let id = 0;
    if (url === '') {
      this.postService.getAllPosts().subscribe((data: Post[]) =>
        this.posts = data)
    } else if (url.startsWith('topic/')) {
      this.route.params.subscribe(params => {
        id = params['id']
        this.postService.getTopicPosts(id).subscribe((data: Post[]) =>
          this.posts = data)
      })
    } else if (url.startsWith('user/')) {
      this.route.params.subscribe(params => {
        id = params['id']
        this.postService.getUserPosts(id).subscribe((data: Post[]) =>
          this.posts = data)
      })
    }
    this.currentUser = this.authService.getCurrentUser()
  }

  redirectToPostPage(post_id: number) {
    this.router.navigate([`/post/${post_id}`]);
  }

  likePost(id: number) {
    this.postService.likePost(id).subscribe(() => {
      this.ngOnInit()
    }, () => {
      this._snackBar.open("Вы не вайшлі ў акаўнт", 'Зразумела');
    })
  }

  dislikePost(id: number) {
    this.postService.dislikePost(id).subscribe(() => {
      this.ngOnInit()
    }, () => {
      this._snackBar.open("Вы не вайшлі ў акаўнт", 'Зразумела');
    })
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.ngOnInit()
    })
  }
  isAdmin: boolean = false;
  currentUser?: any
  posts!: Post[];
}
