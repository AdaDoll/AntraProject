import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ad-search-res',
  templateUrl: './ad-search-res.component.html',
  styleUrls: ['./ad-search-res.component.css']
})
export class AdSearchResComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  

}
