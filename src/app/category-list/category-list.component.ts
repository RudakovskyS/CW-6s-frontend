import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../services/category-list.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Category } from '../dto/category.dto';
import { Topic } from '../dto/topic.dto';
import { AddHierarchyService } from '../services/add-hierarchy.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  constructor(private categoryListService: CategoryListService, private router: Router, private authService: AuthService,
    private hierarchyService: AddHierarchyService) { }

  ngOnInit(): void {
    this.categoryListService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    })
    this.isLoggedIn = this.authService.isLoggedIn();
    this.currentUser = this.authService.getCurrentUser();
  }

  addTopic(category: Category) {
    this.router.navigate([`/category/${category.category_id}/topic/add`]);
  }

  deleteCategory(category: Category) {
    this.hierarchyService.deleteCategory(category.category_id).subscribe(() => {
      this.ngOnInit()
    })
  }

  deleteTopic(topic: Topic) {
    this.hierarchyService.deleteTopic(topic.topic_id).subscribe(() => {
      this.ngOnInit()
    })
  }

  addCategory() {
    this.router.navigate([`/category/add`]);
  }

  redirectToTopicPage(topic_id: number) {
    this.router.navigate([`/topic/${topic_id}`]);
  }

  redirectToHomePage() {
    this.router.navigate([``]);
  }

  redirectToDictionaryPage() {
    this.router.navigate([`dictionary`]);
  }

  redirectToQuizPage() {
    this.router.navigate([`quiz`]);
  }

  redirectToCreateQuizPage() {
    this.router.navigate([`quiz/create`]);
  }

  redirectToUserPage() {
    this.router.navigate([`/user/${this.currentUser?.user_id}`]);
  }

  redirectToPostPostingPage() {
    this.router.navigate(['post']);
  }

  redirectToLoginPage() {
    this.router.navigate(['auth']);
  }

  logout() {
    this.authService.logout()
    location.reload()
  }

  newCategory?: Category
  newTopic?: Topic;
  currentUser?: any
  isLoggedIn?: boolean
  categories?: Category[]
}