import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingCheckpointComponent } from './event-binding-checkpoint/event-binding-checkpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingCheckpointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
