import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../services/category-list.service';
import { Router } from '@angular/router';

interface Category {
  name: string;
  isSelected: boolean;
  topics: Topic[];
}

interface Topic{
  topic_id: number;
  name: string;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  constructor(private categoryListService: CategoryListService, private router: Router){}

  ngOnInit(): void {
    this.categoryListService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    })
  }
  
  redirectToTopicPage(topic_id: number){
    this.router.navigate([`/topic/${topic_id}`]);
  }

  redirectToHomePage(){
    this.router.navigate([``]);
  }

  categories?: Category[] 
}