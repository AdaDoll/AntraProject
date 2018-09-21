import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import { DomSanitizer }  from '@angular/platform-browser';


interface Video {
  title: string;
  genre: string;
  url: string;
  uploadTime: number;
}

//json file
import videos from './example.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller1 = true;
  showFiller2 = false;
  
  
  down = false;

  

  //filtered baskets
  public filterVideos: Video[] = [];
  public filteredVideos: Video[] = [];



  //filter Standards
  public filterUploadTimes: number[] = [1 , 3 , 6];
  public filterGenres: string[] = ["DarkSouls", "Overwatch", "Dota2", "BioShock"];



  //checked Categorization
  public checkedUploadTime: number;
  public checkedGenre: string[] = [];

  //mainPage disable
  homePageActive: boolean;


  //random number generate
  randomNum1: number;
  randomNum2: number;
  randomNum3: number;


  
  
  constructor(public sanitizer: DomSanitizer, private eRef: ElementRef) {
    this.homePageActive = true;
    this.randomNum1 = this.randomNumGenerate();
    this.randomNum2 = this.randomNumGenerate();
    this.randomNum3 = this.randomNumGenerate();
   }

  ngOnInit() {
      videos.videoExample.forEach(video => {
        this.filterVideos.push(video);
      })
  }

  randomNumGenerate() {
    return Math.floor(Math.random()* 100) + 1;
  }

  advSearch() {
    this.homePageActive = false;
    this.filteredVideos = [];
    let res : string = "Advanced Result :  \n";
    res += "now the checked UploadTime is : "

    this.filterUploadTimes.forEach(t => {
      var element = <HTMLInputElement>document.getElementById(t + "");
      if (element.checked === true) {

        res += t  + ", ";
        // the checkedUploadTime is Done
        this.checkedUploadTime = t;
      }
    })

    res += "\nnow the checked genre is : ";

    this.filterGenres.forEach(g => {
      var element = <HTMLInputElement>document.getElementById(g);
      
      if (element.checked === true) {

        res += g + ", ";
        this.checkedGenre.push(g);
        
      }
      else {
        //if it contains the genre 
        if (this.checkedGenre.indexOf(g) > -1) {
          this.checkedGenre.splice(this.checkedGenre.indexOf(g), 1);
        } 
      }
      //the checkedGenre is Done
      
      
    })
    this.applyFilter();
    //display the filtered result
    
    //document.getElementById("content").innerHTML = res;
  }
  uncheckOthers(event) {
    this.filterUploadTimes.forEach(t => {
      //console.log("checking t: " + t + ", event value = " + event.target.value);
      if (t != event.target.value) {
        //console.log(t == event.target.value);
        var element = <HTMLInputElement>document.getElementById(t + "");
        element.checked = false;
      }      
    })
  }

  applyFilter() {
    this.filterVideos.forEach(v => {
      //filter the uploadTime
      if (v.uploadTime <= this.checkedUploadTime && this.checkedGenre.indexOf(v.genre) > -1) {
        console.log("just added " + v.title + ", with uploadTime" + v.uploadTime + ", with genre" + v.genre);
        this.filteredVideos.push(v);
      }
    })
  }

  toggleFilter() {
    
    document.getElementById("dropFilter").classList.toggle("show");
    this.down = !this.down;
    console.log("toggleFilter() : down " + this.down);
  }

  clickedInside($event: Event) {
    console.log("clicked inside");
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event']) clickeddOutside($event) {
    console.log("clicked outside");
    console.log("hostlistener : down " + this.down);
    if (this.down === true) {
      document.getElementById("dropFilter").classList.toggle("show");
      this.down = !this.down;
    }    
  }

  


  // uploadTimeToggle(event) {

  //   if (event.target.checked) {
  //     // console.log("event: " + event.target.value);
  //     //uncheck all others
  //     this.checkedUploadTime.push(event.target.value);
  //   }
  //   else {
  //     this.checkedUploadTime.splice(this.checkedUploadTime.indexOf(event.target.value), 1);
  //   }
    
  // }
  // genreToggle(event) {
    
  //   if (event.target.checked) {
  //     this.checkedGenre.push(event.target.value);
  //     // console.log("added: " + event.target.value);
  //   }
  //   else {
  //     // console.log("genre unchecked detected");
  //     this.checkedGenre.splice(this.checkedGenre.indexOf(event.target.value), 1);
  //   }
  // }

  

  
 }
