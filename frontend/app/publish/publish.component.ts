import { Component , OnInit } from '@angular/core';
import { TutorialService } from '../services/tutorial.service';
import { Tutorial } from '../models/tutorial.model';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent  implements OnInit{
  tutorials : Tutorial[] = [];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
  count : number = 4;
  page : number = 1;
  published: any=true;
  unpublished:any=false;

  constructor(private tutorialService: TutorialService){}
  ngOnInit(): void {
    
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


  searchPublish():void{
    this.tutorialService.findByPublish(this.published).subscribe({
      next:(data)=>{
        this.tutorials=data;
        console.log(data);
      },
      error:(e)=> console.error(e)
    });
  }

  searchUnpublish():void{
    this.tutorialService.findByUnpublish(this.unpublished).subscribe({
      next:(data)=>{
        this.tutorials=data;
        console.log(data);
      },
      error:(e)=> console.error(e)
    });
  }

  sortByAsc(): void {
    this.tutorialService.sortByAsc(this.title).subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  } 


  sortByDsc():void{
    this.tutorialService.sortByDsc(this.title).subscribe({
      next:(data)=>{
        this.tutorials=data;
        console.log(data);
      },
      error:(e)=> console.error(e)
    });
  }

}
