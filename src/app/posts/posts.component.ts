import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../dto/post.dto';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  constructor(private postService: PostsService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const url = this.route.snapshot.url.map(segment => segment.path).join('/');
    let id = 0;

    if(url === ''){
      this.postService.getAllPosts().subscribe((data: Post[]) =>
      this.posts = data)
    } else if(url.startsWith('topic/')){
      this.route.params.subscribe(params => {
        id = params['id']
        this.postService.getTopicPosts(id).subscribe((data: Post[]) =>
        this.posts = data)
      })
    } else if (url.startsWith('user/')){
      this.route.params.subscribe(params => {
        id = params['id']
        this.postService.getUserPosts(id).subscribe((data: Post[]) =>
        this.posts = data)
      })
    }
    
  }

  redirectToPostPage(post_id: number){
    this.router.navigate([`/post/${post_id}`]);
  }

  likePost(id: number){
    this.postService.likePost(id).subscribe(data =>{
      this.ngOnInit()
    })
  }

  dislikePost(id: number){
    this.postService.dislikePost(id).subscribe(data =>{
      this.ngOnInit()
    })
  }

  posts!: Post[];
}
