import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  params = {
  name : "Yoyos's"
}
  constructor() { }
  ngOnInit() {
  }

}
