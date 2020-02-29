import { Component } from '@angular/core';
import { MRTstationComponent } from './mrtstation/mrtstation.component';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[ MRTstationComponent,UserLoginComponent ]
})
export class AppComponent {
  mapping = new Map<string,any>([
    ['MRT',MRTstationComponent],
    ['Login',UserLoginComponent]
  ]);
  

  currentModule = '';

  changeModuleTo(moduleName : string){
    this.currentModule = moduleName;
  }
}
