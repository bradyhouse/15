const Sqlite = require('nativescript-sqlite');
const StateModelSql: any = {
  insert: "insert into config(id, key, value) values(?,?,?)",
  selectAll: "select id, key, value from config",
  selectNextId: "select seq from sqlite_sequence where name='config'",
  selectLevel: "select value as 'level' from config where key = 'level';",
  updateLevel: "update 'main'.'config' set value = ? where key = 'level'",
  dropTable: "drop table 'main'.'config';",
  createTable: "create table 'config' ('id' integer primary key  autoincrement  not null  unique , 'key' text not null , 'value' text not null)"
};

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { StateModel } from './state.model';
import { DbBaseService } from '../db-base.service';


@Injectable()
export class StateService extends DbBaseService {

  stateChange$: Observable<StateModel[]>;

  private _state: StateModel[];
  private _stateObserver: Observer<StateModel[]>;
  private _isEmpty: Boolean;

  get state(): StateModel[] {
    return this._state;
  }

  set state(value: StateModel[]) {
    this._state = value;
    if (this._stateObserver) {
      this._stateObserver.next(value);
    }
  }

  constructor() {
    super();

    this._state = [];
    this._isEmpty = true;

    this.stateChange$ = new Observable<StateModel[]>(
      (observer: any) => this._stateObserver = observer
    ).share();

    this.subscriptions.push(this.databaseChange$
      .subscribe(
        (database: any) => this.onDatabaseChange(database)
      ));

  }

  onDatabaseChange(database: any) {
    this.consoleLogMsg('state.service', 'onDatabaseChange');
    this.fetch();
  }

  fetch() {
    this.consoleLogMsg('state.service', 'fetch');
    let data: StateModel[] = [];

    if (this.database) {
      this.consoleLogMsg('state.service', StateModelSql.selectAll);
      this.database.all(StateModelSql.selectAll).then((items: any[]) => {
        if (items && items.length) {
          items.forEach((item: any, index: number) => {
            let state: StateModel = new StateModel(
              item.hasOwnProperty('id') ? +(item.id) : 1,
              item.hasOwnProperty('key') ? item.key : null,
              item.hasOwnProperty('value') ? item.value : null
            );
            this.consoleLogRecord(index, state);
            this._isEmpty = false;
            data.push(state);
          });
        } else {
          let state = new StateModel(
            0,
            'level',
            '1'
          );
          data.push(state);
        }
        this.state = data;
      }, error => {
        this.consoleLogMsg('state.service', 'fetch error: ' + error);
      });
    }
  }

  insert(state: StateModel, fetch: Boolean = false) {
    this.consoleLogMsg('state.service', 'insert');
    if (this.database) {
      this.database.execSQL(StateModelSql.insert, [state.id, state.key, state.value])
        .then((item: any) => {
          this.consoleLogRecord(0, item);
          if (fetch) {
            this.fetch();
          }
        });
    }
  }

  updateLevel(level: number) {
    this.consoleLogMsg('state.service', 'updateLevel');
    if (this.database) {
      if (this._isEmpty) {
        this.insert(new StateModel(0, 'level', String(level)));
      } else {
        this.database.execSQL(StateModelSql.updateLevel, [level])
          .then((item: any) => {
            this.consoleLogRecord(0, item);
            this.fetch();
          });
      }
    }
  }

  truncate(): void {
    this.consoleLogMsg('state.service', 'truncate');
    if (this.database) {
      this.database.execSQL(StateModelSql.dropTable)
        .then((err: any) => {
          if (err) {
            this.consoleLogMsg('state.service', 'ERROR: Attempt to drop the config table failed.');
            return;
          }
          this.database.execSQL(StateModelSql.createTable)
            .then((err: any) => {
              if (err) {
                this.consoleLogMsg('state.service', 'ERROR: Attempt to create the config table failed.');
                return;
              }
              this.insert(new StateModel(
                0,
                'level',
                '1'
              ), true);
            });
        });
    }
  }

  getKeyValue(key: string): any {
    this.consoleLogMsg('state.service', 'getKeyValue');
    let arr: any[];
    if (this.state) {
      arr = this.state.filter((item: StateModel) => {
        return item.key.toLowerCase() === key.toLowerCase();
      });
      if (arr && arr.length) {
        return arr[0]['value'];
      }
    }
    return null;
  }

}
