import { Component, OnInit } from '@angular/core';
import { CommentSectionService } from '../services/comment-section.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../dto/comment.dto';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  constructor(private commentService: CommentSectionService, private route: ActivatedRoute, private authService: AuthService) {}
  id = 0;
  
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.commentService.getCommentsForPost(this.id).subscribe((data: Comment[]) =>
    this.comments = data)
  }

  sendComment(){
    this.commentService.sendComment(this.commentContent, this.id).subscribe(() => {
      this.commentContent = ''
      this.ngOnInit()
    })
  }
  isLoggedIn!: boolean
  commentContent!: string
  comments?: Comment[]
}
