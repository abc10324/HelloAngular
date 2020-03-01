import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  twoWayBindingStr :string;

  constructor() { 
    this.twoWayBindingStr = 'init value';
  }

  ngOnInit() {
  }

  validTwoWayBindingStr(){
    let styleClass = this.twoWayBindingStr.length < 5 ? 'bg-warning' : 'bg-success';
    styleClass += this.twoWayBindingStr.length == 0 ? '' : ' p-1';

    return styleClass;
  }

}
