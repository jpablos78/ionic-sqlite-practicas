import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { Song } from './song';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error => {
      console.log(error);
    });
  }

  createDB() {
    this.sqlite.create({
      name: 'SistemaFacturacion.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.storage = db;
        this.getFakeData();
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  // Render fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          //this.getSongs();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  /*createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        alert('freaky_datatable Database Created!');
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }*/
}
