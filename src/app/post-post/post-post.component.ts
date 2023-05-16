import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Category } from '../dto/category.dto';
import { Topic } from '../dto/topic.dto';
import { CategoryListService } from '../services/category-list.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-post-post',
  templateUrl: './post-post.component.html',
  styleUrls: ['./post-post.component.css']
})
export class PostPostComponent implements OnInit {
  constructor(private postService: PostsService, private categoryListService: CategoryListService, private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn()
    this.categoryListService.getCategories().subscribe((data: Category[]) => {
      this.categories = data
    })
  }
  isLoggedIn!: boolean;
  selectedFile?: File;
  categories!: Category[]
  selectedCategory!: Category
  selectedTopic!: Topic;
  postTitle!: string;
  postContent!: string;
  postFile!: File
  submitPost() {
      this.postService.postPost(this.postTitle, this.postContent, this.selectedTopic.topic_id).subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
