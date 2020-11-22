import { Component } from '@angular/core';
import words from './words.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public wordsList: {img: string, descr: string} [] = words;
}
