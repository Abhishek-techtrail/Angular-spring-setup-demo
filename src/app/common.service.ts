import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  targetUrl = '';
  body = {};
  
  constructor(private http: Http) { }
  
  apiCall(){
    this.targetUrl = '/api/books';
    this.body = {};
    return this.http.post(this.targetUrl,this.body)
      .map(
        (response) => {
          console.log(response.text());
          return response.text();
        }
        );
    
  }
  
    apiGetCall(){
    this.targetUrl = '/api/books';
    this.body = {};
    return this.http.get(this.targetUrl,this.body)
      .map(
        (response) => {
          const data = response.json();
            return data;
        }
      );
  }

}