import { Component,OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent  implements OnInit{

  userName:string="";
  password:string="";
email:string="";

submitted=false;
  constructor(private tutorialService: TutorialService){}

  ngOnInit(): void {
    
  }

 
  userSignUp(): void {
    const data = {
      userName: this.userName,
      email: this.email,
      password: this.password
    };

    this.tutorialService.userSignUp(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        alert('User registration complete, Now login to access the features')
      },
      error: (e) => console.error(e)
    });
  }


}
