import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../dto/post.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css']
})
export class SinglePostPageComponent implements OnInit {
  constructor(private postService: PostsService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    var id = 0;
    this.route.params.subscribe(params => {
      id = params['id']
    });
    this.postService.getPost(id).subscribe((data: Post) =>
      this.post = data)
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

  post!: Post;
}
