import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-accessing',
  templateUrl: './form-accessing.component.html',
  styleUrls: ['./form-accessing.component.css']
})
export class FormAccessingComponent implements OnInit {

  user = {
    serailNo: 0,
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData :NgForm){
    this.user.username = formData.value.username;
    this.user.password = formData.value.password;

    console.log(this.user);
  }

}
