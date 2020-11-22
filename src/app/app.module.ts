import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { CardFrontComponent } from './card-front';
import { CardBackComponent } from './card-back';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFrontComponent,
    CardBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
