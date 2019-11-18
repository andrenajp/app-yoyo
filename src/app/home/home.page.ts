import { Component } from '@angular/core';
import {PopoverController, AlertController} from '@ionic/angular';
import {LanguagePopoverPage} from '../pages/language-popover/language-popover.page';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
params = {
  name : "Yoyos's"
}
  constructor(private popoverCtrl : PopoverController,
  private alertCtrl : AlertController,
  private translate : TranslateService
  ) {}

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event : ev
    })
    await popover.present();
  }
  async showAlert(){
    const alert = await this.alertCtrl.create({
      header : this.translate.instant('ALERT.header'),
      message : this.translate.instant('ALERT.message'),
      buttons : this.translate.instant('ALERT.buttons')
    });
    alert.present();
  }
}
