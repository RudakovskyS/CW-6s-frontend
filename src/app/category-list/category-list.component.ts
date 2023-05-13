import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../services/category-list.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Category } from '../dto/category.dto';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  constructor(private categoryListService: CategoryListService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.categoryListService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    })
     this.isLoggedIn = this.authService.isLoggedIn();
  }
  
  redirectToTopicPage(topic_id: number){
    this.router.navigate([`/topic/${topic_id}`]);
  }

  redirectToHomePage(){
    this.router.navigate([``]);
  }

  redirectToDictionaryPage(){}

  redirectToQuizPage(){}

  redirectToUserPage(){}
  
  redirectToPostPostingPage(){
    this.router.navigate(['post']);
  }

  redirectToLoginPage(){
    this.router.navigate(['auth']);
  }

  logout(){
    this.authService.logout()
    this.ngOnInit();
  }
  isLoggedIn?: boolean
  categories?: Category[] 
}