import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { AngularPaginatorModule } from 'angular-paginator';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PublishComponent } from './publish/publish.component';
import { TutDetUserComponent } from './tut-det-user/tut-det-user.component';




@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LoginComponent,
    HomeComponent,
    UserSignUpComponent,
    UserSignInComponent,
    UserPageComponent,
    AboutusComponent,
    PublishComponent,
    TutDetUserComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSortModule,
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
