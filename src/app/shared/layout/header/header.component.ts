import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller1 = true;
  showFiller2 = false;
  
  constructor() { }

  ngOnInit() {
  }

}
