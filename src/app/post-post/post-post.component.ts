import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Category } from '../dto/category.dto';
import { Topic } from '../dto/topic.dto';
import { CategoryListService } from '../services/category-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-post',
  templateUrl: './post-post.component.html',
  styleUrls: ['./post-post.component.css']
})
export class PostPostComponent implements OnInit {
  constructor(private postService: PostsService, private categoryListService: CategoryListService, private router: Router) { }

  ngOnInit(): void {
    this.categoryListService.getCategories().subscribe((data: Category[]) => {
      this.categories = data
    })
  }

  categories!: Category[]
  selectedCategory!: Category
  selectedTopic!: Topic;
  postTitle!: string;
  postContent!: string;

  submitPost() {
    console.log(this.postTitle, this.postContent, this.selectedTopic.topic_id);

    this.postService.postPost(this.postTitle, this.postContent, this.selectedTopic.topic_id).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
