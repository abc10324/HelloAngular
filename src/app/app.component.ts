import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentModule = '';

  changeModule(moduleName : string){
    this.currentModule = moduleName;
  }
}
