const frame = require('ui/frame');

import { Component, ElementRef, ViewEncapsulation, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../shared/config';
import { Base } from '../../base';
import { ScoreService } from '../../shared/score/score.service';
import { Score } from '../../shared/score/score';
import { StateModel } from '../../shared/state/state.model';
import { StateService } from '../../shared/state/state.service';

@Component({
  selector: "pz-game",
  moduleId: module.id,
  templateUrl: "./game.component.html",
  styleUrls: ["./game-common.css", "./game.css"]
})
export class GameComponent extends Base implements OnInit {
  @ViewChild("container") container: ElementRef;
  isHighScoreButton: Boolean;
  isDev: Boolean;
  title: string;
  highScores: Score[];
  level: number;
  isLoading: Boolean;

  constructor(private _router: RouterExtensions,
              private _route: ActivatedRoute,
              private _scoreService: ScoreService,
              private _stateService: StateService) {
    super();
    this.isLoading = true;
    this.isHighScoreButton = false;
    this.isDev = Config.isDev;

    this.subscriptions.push(_stateService.stateChange$
      .subscribe(
        (state: any) => this.onStateServiceDataChange(state)
      ));

    this.subscriptions.push(_scoreService.dataChange$
      .subscribe(
        (scores: any) => this.onScoreServiceDataChange(scores)
      ));

    _route.params.subscribe((params: any) => {
      this.isLoading = false;
      if (params && params.hasOwnProperty('target')) {
        this._router.navigate([params['target']], Config.transition);
      }
    });

  }

  ngOnInit() {
    this.title = Config.title;
    if (Config.isDev) {
      this.title += ' (Dev Mode)';
    }
  }

  onStateServiceDataChange(state: StateModel[]) {
    this.consoleLogMsg('game.component', 'onStateServiceDataChange');
    let level: string = this._stateService.getKeyValue('level');
    this.consoleLogMsg('game.component', 'level = ' + level);
    if (level) {
      this._scoreService.level = this.level = Number(level);
    } else {
      this._scoreService.level = this.level = Config.defaultLevel;
    }
  }

  onScoreServiceDataChange(scores: Score[]) {
    this.consoleLogMsg('game.component', 'onScoreServiceDataChange');
    if (scores) {
      this.highScores = scores;
      if (this.highScores && this.highScores.length) {
        this.isHighScoreButton = true;
      }
      this.isLoading = false;
    }
  }

  onPlayTap() {
    this.consoleLogMsg('game.component', 'onPlayTap');
    switch (this.level) {
      case 3:
        this._router.navigate(['/level-three'], Config.transition);
        break;
      case 2:
        this._router.navigate(['/level-two'], Config.transition);
        break;
      default:
        this._router.navigate(['/level-one'], Config.transition);
        break;
    }
  }

}
