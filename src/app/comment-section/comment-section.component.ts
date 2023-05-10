import { Component, OnInit } from '@angular/core';
import { CommentSectionService } from '../services/comment-section.service';
import { ActivatedRoute } from '@angular/router';

interface Comment {
  content: string;
  date_created: Date
  user: User
}

interface User {
  username: string
}

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  constructor(private commentService: CommentSectionService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    var id = 0;
    this.route.params.subscribe(params => {
      id = params['id']
    });
    this.commentService.getCommentsForPost(id).subscribe((data: Comment[]) =>
    this.comments = data)
  }

  comments?: Comment[]
}
