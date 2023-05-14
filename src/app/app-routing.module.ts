import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';
import { TopicComponent } from './topic/topic.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PostPostPageComponent } from './post-post-page/post-post-page.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'auth', component: AuthComponent},
	{path: 'post/:id', component: SinglePostPageComponent},
	{path: 'post', component: PostPostPageComponent},
	{path: 'topic/:id', component: TopicComponent},
	{path: 'user/:id', component: UserPageComponent},
	{path: 'dictionary', component: DictionaryComponent},
	{path: 'quiz', component: QuizPageComponent}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }