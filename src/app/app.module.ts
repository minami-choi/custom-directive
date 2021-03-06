import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { CardHoverDirective } from './directives/hover-directive'

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
