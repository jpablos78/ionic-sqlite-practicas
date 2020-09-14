import { Component, OnInit } from '@angular/core';
import { DbService } from './../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private db: DbService
  ) { }

  ngOnInit() {
    /*this.db.dbState().subscribe((res) => {
      if (res) {
        console.log('dbState', res);
        //this.db.fetchSongs().subscribe(item => {
        //  this.Data = item
        //})
      }
    });*/

    this.db.dbState().subscribe((res) => {
      if (res) {
        //this.db.fetchSongs().subscribe(item => {
        //  this.Data = item
        //})
      }
    });
  }

}
