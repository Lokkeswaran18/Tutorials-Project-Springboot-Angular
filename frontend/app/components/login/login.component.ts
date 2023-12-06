import { Component ,OnInit} from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { Tutorial } from '../../models/tutorial.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  tutorials : Tutorial[] = [];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';

  email:string="";
  password:string="";

  constructor(private tutorialService: TutorialService,
    private http:HttpClient,
    private router:Router) {}
  ngOnInit(): void {
    
  }

  adminLoginPort(){
    console.log(this.email);
    console.log(this.password);

    let data ={
      email:this.email,
      password:this.password
    };
    this.tutorialService.adminLogin(data).subscribe((resultData:any)=>{
      console.log(resultData);

      if(resultData == "Invalid email or password"){
        alert('Invalid email or password, check again!');
      }
      else{
        
        this.router.navigateByUrl("/tutorials")
      }
    })

  }


}
