import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MRTstationComponent } from './mrtstation/mrtstation.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormAccessingComponent } from './form-accessing/form-accessing.component';
import { HttpClientComponent } from './http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    MRTstationComponent,
    UserLoginComponent,
    DataBindingComponent,
    FormAccessingComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MRTstationComponent]
})
export class AppModule { }
