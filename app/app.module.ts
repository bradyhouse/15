import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import {GameComponent} from './pages/game/game.component';
import {AboutComponent} from './pages/about/about.component';
import {LevelOneComponent} from './pages/level-one/level-one.component';
import {LevelTwoComponent} from './pages/level-two/level-two.component';
import {LevelThreeComponent} from './pages/level-three/level-three.component';
import {HighScoreComponent} from './pages/high-score/high-score.component';
import {AddHighScoreComponent} from './pages/high-score/add-high-score/add-high-score.component';
import {ScoreService} from './shared/score/score.service';
import {StateService} from './shared/state/state.service';
import {BoardService} from './shared/board/board.service';
import { setStatusBarColors } from "./shared/utils/status-bar-util";

setStatusBarColors();

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        GameComponent,
        AboutComponent,
        LevelOneComponent,
        LevelTwoComponent,
        LevelThreeComponent,
        HighScoreComponent,
        AddHighScoreComponent
    ],
    providers: [
        BoardService,
        StateService,
        ScoreService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
