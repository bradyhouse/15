import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {GameComponent} from './pages/game/game.component';
import {AboutComponent} from './pages/about/about.component';
import {LevelOneComponent} from './pages/level-one/level-one.component';
import {LevelTwoComponent} from './pages/level-two/level-two.component';
import {LevelThreeComponent} from './pages/level-three/level-three.component';
import {HighScoreComponent} from './pages/high-score/high-score.component';
import {AddHighScoreComponent} from './pages/high-score/add-high-score/add-high-score.component';


const routes: Routes = [
    {path: '', component: GameComponent},
    {path: 'game/:target', component: GameComponent},
    {path: 'about', component: AboutComponent},
    {path: 'level-one', component: LevelOneComponent},
    {path: 'level-two', component: LevelTwoComponent},
    {path: 'level-three', component: LevelThreeComponent},
    {path: 'high-score', component: HighScoreComponent},
    {path: 'add-high-score/:level:moves:caller', component: AddHighScoreComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }