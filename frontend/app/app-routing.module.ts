import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  {path:'login',component:LoginComponent},
  {path:'userSignIn',component:UserSignInComponent},
  {path:'userSignUp',component:UserSignUpComponent},
  {path:'userPage',component:UserPageComponent},
  {path:'publish',component:PublishComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
