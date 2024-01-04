import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
// importoidaan infoservice sekä onInit komponenttiin
@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css'],
})
// määritellään, että luokka CodingComponent toteuttaa lifecycle metodin onInit
export class CodingComponent implements OnInit {
  // määritellään property codingSkills julkiseksi ja olemaan tyyppiä {skill: string}[]
  public codingSkills: { skill: string }[];

  // konstruktori saa parametrikseen infoService, joka on tyyppi' InfoService
  constructor(private infoService: InfoService) {
    // alustetaan codingSkills propertyksi tyhjä lista
    this.codingSkills = [];
  }

  ngOnInit(): void {
    // määritellään lifecycle metodin onInit, joka asettaa codingSkills propertyn arvoksi
    // getCodingSkills() metodin palauttamat arvot
    this.codingSkills = this.infoService.getCodingSkills();
  }
}
