import { Component, OnInit, ViewChild } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit{
  tutorials : Tutorial[] = [];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
  count : number = 4;
page : number = 1;
  published: any=true;
  unpublished:any=false;
  constructor(private tutorialService: TutorialService,
    ) {}

  ngOnInit(): void {
    this.retrieveTutorials();
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

  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
    this.togglePopup();
  }

  isPopupOpen = false;

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
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
