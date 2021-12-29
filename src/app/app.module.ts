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

@NgModule({
  declarations: [
    AppComponent,
    FormAppComponent,
    PostIdeasComponent,
    NewHappensComponent,
    CustumValidatorDirective,
    CustumValidatorFuncDirective
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
