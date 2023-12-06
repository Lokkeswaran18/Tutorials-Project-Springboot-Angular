import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent {

  password:string="";
  email:string="";
 

  constructor(private tutorialService: TutorialService,
    private http:HttpClient,
    private router:Router){}


  userSignIn(){
    console.log(this.email);
    console.log(this.password);

    let data ={
      email:this.email,
      password:this.password
    };
    this.tutorialService.userSignIn(data).subscribe((resultData:any)=>{
      console.log(resultData);
      console.log('hi');

      this.router.navigateByUrl("/userPage")
      if(resultData =="Invalid email or password"){
        console.log('not welcome');
        // alert('Invalid email or password, check again!')
      }
      else{
        
        this.router.navigateByUrl("/userPage")
      }
    })

  }

}
