import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { Config } from '../../shared/config';


@Component({
  selector: 'about',
  moduleId: module.id,
  templateUrl: './about.component.html',
  styleUrls: ['./about-common.css', './about.css']
})
export class AboutComponent implements OnInit {
  title: string;

  constructor(private _router: Router, private _page: Page) {
    _page.className = 'page';
  }

  ngOnInit() {
    this.title = Config.title + ' - About';
    if (Config.isDev) {
      this.title += ' (Dev Mode)';
    }
  }

  onNavBtnTap(): void {
    this._router.navigate([''], Config.transition);
  }

}
