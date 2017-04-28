import { Component } from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Component({
    moduleId: module.id,
    selector: "main",
    template: "<router-outlet></router-outlet>"
})
export class AppComponent {
    private database: any;

    public constructor() {
        if (!Sqlite.exists("highscore.db")) {
            Sqlite.copyDatabase("highscore.db");
        }
    }

}