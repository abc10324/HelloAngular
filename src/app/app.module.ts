import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MRTstationComponent } from './mrtstation/mrtstation.component';

@NgModule({
  declarations: [
    AppComponent,
    MRTstationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MRTstationComponent]
})
export class AppModule { }
