import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';
import { TopicComponent } from './topic/topic.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'auth', component: AuthComponent},
	{path: 'post/:id', component: SinglePostPageComponent},
	{path: 'topic/:id', component: TopicComponent},
	{path: 'user/:id', component: UserPageComponent}

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }