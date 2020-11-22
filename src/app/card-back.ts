import { Component } from '@angular/core';

@Component({
  selector: 'app-card-back',
  template: `
   <div class="card-back">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class CardBackComponent {

}
