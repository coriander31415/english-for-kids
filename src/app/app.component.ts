import { Component, OnInit } from '@angular/core';
import words from './words.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toggleProperty = false;

  public wordsList: {img: string, descr: string} [] = words;

  constructor() { }

  ngOnInit(): void { }

  toggle(): void {
    this.toggleProperty = !this.toggleProperty;
  }

}
