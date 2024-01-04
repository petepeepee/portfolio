import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
// komponenttiin tuodaan infoservice, sekä onInit

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})

// jakaa luokan HistoryComponent muille komponenteille, määrittää luokan implementoivan onInit interfacea
export class HistoryComponent implements OnInit {
  // määrittelee historycomponent luokan julkiset propertyt
  public workXP: { time: string; place: string; assignment: string }[];
  public education: { school: string; degree: string; time: string }[];
  public languageSkills: { language: string; level: string }[];

  // infoservice injektoidaan komponenttiin
  constructor(private infoService: InfoService) {
    // alustetaan propertyt tyhjiksi taulukoiksi
    this.workXP = [];
    this.education = [];
    this.languageSkills = [];
  }

  ngOnInit(): void {
    // annetaan propertyille arvot infoservicen metodeilla
    this.workXP = this.infoService.getWorkXP();
    this.education = this.infoService.getEducation();
    this.languageSkills = this.infoService.getLanguageSkills();
  }
}
