import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../services/mysql.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  items = [];

  constructor(public API:MysqlService) { }

  ngOnInit() {
    this.onload()
  }

  //retrieve function
  onload(){
    this.API.retrieve().then((result) => {
        console.log(result);
        this.items = [];
        if(result['code'] == 1){
          result['message'].forEach(element => { 
            this.items.push(element);
            console.log(this.items);
          });
        }
        else if(result['code'] == 2){
          this.items.push(result['message']);
        } 
        else{
          this.items.push(result['message']);
        };
      }).catch(function(reject) {
        console.log('reject');
      });
    }


}
