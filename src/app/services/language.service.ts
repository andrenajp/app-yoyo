import {TranslateService} from '@ngx-translate/core'
import {Storage} from '@ionic/storage';
import { Injectable } from '@angular/core';
const LNG_KEY = 'SELECT_LANGUAGE';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected ='';
  constructor(
    private translate : TranslateService,
    private storage : Storage
    ) { }
  SetInitializeAppLanguage(){
    let langue = this.translate.getBrowserLang();
    this.translate.setDefaultLang(langue);
    this.storage.get(LNG_KEY).then(
      val=>{
        if(val){
          this.setLanguage(val);
          this.selected = val;
        }
      }
    )
    console.log('ok')
  }

  getLanguage(){
    return [{text:'English',value: 'en', img : '../assets/imgs/en.png'},
            {text:'Français', value: 'fr', img :'../assets/imgs/fr.png'},
            {text:'中国',value:'zh-cmn-Hans',img:'../assets/imgs/zh.png'}
    ]
  }

  setLanguage(lng){
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY,lng);
  }
}
