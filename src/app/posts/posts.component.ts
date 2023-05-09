import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

interface Post{
  title: string;
  content: string;
  date_created: Date;
  user: User
  topic: Topic
  likes: Like[]
  dislikes: Dislike[]
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
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  constructor(private postService: PostsService){}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data: Post[]) =>
    this.posts = data)
    console.log();
    
  }
  posts?: Post[]
}
