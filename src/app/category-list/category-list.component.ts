import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../services/category-list.service';

interface Category {
  name: string;
  isSelected: boolean;
  topics: Topic[];
}

interface Topic{
  name: string;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  constructor(private categoryListService: CategoryListService){}

  ngOnInit(): void {
    this.categoryListService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    })
  }
  
  onSelect(category: Category): void {
    category.isSelected = !category.isSelected;
  }

  categories?: Category[] 
}