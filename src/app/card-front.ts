import { Component } from '@angular/core';

@Component({
  selector: 'app-card-front',
  template: `
  <div class="card-front">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class CardFrontComponent {

}
