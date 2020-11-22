import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardFrontComponent } from '../card-front';
import { CardBackComponent } from '../card-back';


@NgModule({
  declarations: [CardComponent, CardFrontComponent, CardBackComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CardFrontComponent, CardBackComponent]
})
export class CardModule {

}
