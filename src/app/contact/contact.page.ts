import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../services/mysql.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  fullname: any;
  email: any;
  type: any;
  message: any;
  
  constructor(public API: MysqlService) { }

  ngOnInit() {
  }
  //untuk hantar data ke MySQL
  sendForm(){
    console.log('send');
    this.API.insert(this.fullname,this.email,this.type,this.message).then((result) => {
      console.log('result');
      var output = JSON.stringify(result);
      alert(output);
    }).catch(function(reject) {
      console.log('reject');
      var output = JSON.stringify(reject);
      alert(output);
    });
  }
  //Tamat
}
