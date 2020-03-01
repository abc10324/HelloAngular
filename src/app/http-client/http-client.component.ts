import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  posts :object;
  limit = 8;
  page = 1;
  maxPage = 1;
  funcToggle :boolean;
  func :string;

  constructor(private http :HttpClient) { 
    this.func = 'GET Request';
    this.funcToggle = true;
  }

  ngOnInit() {
    this.getRequest();
  }

  pageUp(){
    this.page++;
  }

  pageDown(){
    this.page--;
  }

  toggleFunc(){
    this.funcToggle = !this.funcToggle;
    this.func = this.funcToggle ? 'GET Request' : 'POST Request';

    if(this.funcToggle){
      this.getRequest();
    } else {
      this.postRequest();
    }
  }

  private getRequest(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( posts => {
      this.posts = posts;
      this.maxPage = Math.ceil((this.posts as object[]).length / this.limit);
    });
  }

  private postRequest(){
    let userId = Math.ceil(Math.random() * 100);
    let title = this.posts[userId].title;

    this.http.post('https://jsonplaceholder.typicode.com/posts',{
                  userId: userId,
                  title: title
                })
               .subscribe( posts => {
                 this.posts = [posts];
                 this.page = 1;
                 this.maxPage = Math.ceil((this.posts as object[]).length / this.limit);
               });
  }

}
