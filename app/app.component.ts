var Sqlite = require("nativescript-sqlite");

import { Component } from "@angular/core";

@Component({
    selector: "main",
    templateUrl: "app.component.html",
})
export class AppComponent {

    private database: any;

    public constructor() {
        if (!Sqlite.exists("highscore.db")) {
            Sqlite.copyDatabase("highscore.db");
        }
    }

}
