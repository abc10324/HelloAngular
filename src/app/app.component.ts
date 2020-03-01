import { Component } from '@angular/core';
import { MRTstationComponent } from './mrtstation/mrtstation.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormAccessingComponent } from './form-accessing/form-accessing.component';
import { HttpClientComponent } from "./http-client/http-client.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[ MRTstationComponent,
                    UserLoginComponent,
                    DataBindingComponent,
                    FormAccessingComponent,
                    HttpClientComponent]
})
export class AppComponent {
  mapping = new Map<string,any>([
    ['MRT',MRTstationComponent],
    ['Login',UserLoginComponent],
    ['DataBind',DataBindingComponent],
    ['FormAccessing',FormAccessingComponent],
    ['HttpClient',HttpClientComponent]
  ]);
  

  currentModule = '';

  changeModuleTo(moduleName : string){
    this.currentModule = moduleName;
  }
}
