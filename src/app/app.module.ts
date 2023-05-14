import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CategoryListComponent} from './category-list/category-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { TopicComponent } from './topic/topic.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './token.interceptor';
import { UserPageComponent } from './user-page/user-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PostPostComponent } from './post-post/post-post.component';
import { MatOptionModule } from '@angular/material/core';
import { PostPostPageComponent } from './post-post-page/post-post-page.component';
import { NoContentPageComponent } from './no-content-page/no-content-page.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    AuthComponent,
    HomeComponent,
    PostsComponent,
    SinglePostPageComponent,
    CommentSectionComponent,
    TopicComponent,
    RegisterComponent,
    LoginComponent,
    UserPageComponent,
    UserInfoComponent,
    PostPostComponent,
    PostPostPageComponent,
    NoContentPageComponent,
    DictionaryComponent,
    QuizPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
    ],
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('thumbs-up', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/thumbs-up.svg'));
    this.matIconRegistry.addSvgIcon('thumbs-down', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/thumbs-down.svg'));
    this.matIconRegistry.addSvgIcon('comment', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/comment.svg'));
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/logo.svg'));
    this.matIconRegistry.addSvgIcon('trash', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/trash.svg'));
  }
}
