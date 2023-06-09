import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddHierarchyService } from '../services/add-hierarchy.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-hierarchy',
  templateUrl: './add-hierarchy.component.html',
  styleUrls: ['./add-hierarchy.component.css']
})
export class AddHierarchyComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private hierarchyService: AddHierarchyService,
              private authService: AuthService) { }

  ngOnInit(): void {
    const url = this.route.snapshot.url.map(segment => segment.path).join('/');
    this.currentUser = this.authService.getCurrentUser()

    if (url === 'category/add') {
      this.isCategoryPage = true
    } else {
      this.isCategoryPage = false
      this.route.params.subscribe(params => {
        this.current_category_id = params['id']
      })
    }
    console.log(this.isCategoryPage);

  }

  addCategory() {
    this.hierarchyService.addCategory(this.newElement).subscribe(() => {
      this.redirectToHomePage()
    })
  }

  addTopic() {
    this.hierarchyService.addTopic(this.current_category_id, this.newElement).subscribe(() => {
      this.redirectToHomePage()
    })
  }

  redirectToHomePage() {
    this.router.navigate([''])
  }
  isCategoryPage?: boolean
  currentUser?: any;
  current_category_id!: number
  newElement!: string;
}


