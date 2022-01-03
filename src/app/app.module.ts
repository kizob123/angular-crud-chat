import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAppComponent } from './form-app/form-app.component';
import { PostIdeasComponent } from './post-ideas/post-ideas.component';
import { NewHappensComponent } from './new-happens/new-happens.component';
import { CustumValidatorDirective } from './custum-validator.directive';
import { CustumValidatorFuncDirective } from './custum-validator-func.directive';
import { FormLoginComponent } from './form-login/form-login.component';
import { EntryComponent } from './entry/entry.component';
import { IdeaShowsComponent } from './views/idea-shows/idea-shows.component';
import { IdeaPostComponent } from './views/idea-post/idea-post.component';
import { AboutComponent } from './profile/about/about.component';
import { InterestsComponent } from './profile/interests/interests.component';
import { PostsComponent } from './profile/posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewHolderComponent } from './views/view-holder/view-holder.component';
import { LoginEntryComponent } from './login-entry/login-entry.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAppComponent,
    PostIdeasComponent,
    NewHappensComponent,
    CustumValidatorDirective,
    CustumValidatorFuncDirective,
    FormLoginComponent,
    EntryComponent,
    IdeaShowsComponent,
    IdeaPostComponent,
    AboutComponent,
    InterestsComponent,
    PostsComponent,
    PageNotFoundComponent,
    ViewHolderComponent,
    LoginEntryComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
