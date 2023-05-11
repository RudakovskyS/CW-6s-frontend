import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

interface Post{
  post_id: number;
  title: string;
  content: string;
  date_created: Date;
  user: User
  topic: Topic
  likes: Like[]
  dislikes: Dislike[]
  comments: Comment[]
}

interface Comment{
  content: string
}

interface Like{
  userUser_id: number,
}
interface Dislike{
  userUser_id: number,
}
interface User{
  username: string
}

interface Topic{
  name: string
}


@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css']
})
export class SinglePostPageComponent implements OnInit{
  constructor(private postService: PostsService, private route: ActivatedRoute){}

  ngOnInit(): void {
    var id = 0;
    this.route.params.subscribe(params => {
      id = params['id']
    });
    this.postService.getPost(id).subscribe((data: Post) =>
    this.post = data)
  }

  async likePost(id: number){
    console.log(id);
    this.postService.likePost(id)
  }

  async dislikePost(id: number){
    this.postService.dislikePost(id)
  }

  post!: Post;
}
