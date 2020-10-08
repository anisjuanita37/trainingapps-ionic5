import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  credential = btoa('test' + ":" + 'test');;
  url_api = "https://api.ionic.my/anis/api.php";

  constructor(public http: HttpClient) { }

  //send Contact Form
//insert
insert(fullname,email,type,message){
  return new Promise((resolve, reject) =>{
    var configUrl = this.url_api;
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': "Basic " + this.credential
    });
    let data = {
      submit : 'insert',
      table_name : 'contactform',
      fullname : fullname,
      email: email,
      type: type,
      message : message
    };
    this.http
      .post(configUrl,JSON.stringify(data),{headers:headers})
      .subscribe((res:any) => {
        resolve(res);
      }, (err) =>{
        reject(err);
      });
  });
}
  //End


  //read news from db
  // retrieve
retrieve(){
  return new Promise((resolve, reject) =>{
    var configUrl = this.url_api;
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': "Basic " + this.credential
    });
    let data = {
      submit : 'search',
      table_name : 'news',
      title : ''
    };
    this.http
      .post(configUrl,JSON.stringify(data),{headers:headers})
      .subscribe((res:any) => {
        resolve(res);
      }, (err) =>{
        reject(err);
      });
  });
}
  //end


}
