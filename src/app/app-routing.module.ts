import { IdeaPostComponent } from './views/idea-post/idea-post.component';
import { IdeaShowsComponent } from './views/idea-shows/idea-shows.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormAppComponent } from './form-app/form-app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginEntryComponent } from './login-entry/login-entry.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes=[
{path:'login-form',component: FormLoginComponent},
{path:'reg-form',component:FormAppComponent},
{path:'',component:FormLoginComponent,pathMatch:'full'},

{path:'idea-shows',component:IdeaShowsComponent},
{path:'idea-post',component:IdeaPostComponent},
{path:'**',component:PageNotFoundComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
