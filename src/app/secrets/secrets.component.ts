import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { RiddleService } from '../riddle.service';
import { Riddle } from '../riddle.service';

// importoidaan infoservice ja riddleservice, jotta saadaan infoservisestä faktoja
//  ja riddleservicestä riddlerajapinta sekä sen funktiot käyttöön
@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.css'],
})

// määritellään että SecretsComponent luokka toteuttaa lifecyclemetodin ngOnInit
export class SecretsComponent implements OnInit {
  // määritellään komponentin ominaisuudet(propertyt)
  randomFact: string;
  showErrorMessage = false;
  riddle?: Riddle;
  correctAnswer?: string;
  answer: string;
  isSolved: boolean;

  // konstruktori alustaa kaksi palvelua joka ovat InfoService ja RiddleService
  // ja määrittelee ne julkisiksi
  constructor(
    public infoService: InfoService,
    public riddleService: RiddleService
  ) {
    // tässä alustetaan aiemmin määriteltyjen propertyjen arvot
    this.randomFact = this.infoService.getRandomFacts();
    this.answer = '';
    this.isSolved = this.riddleService.getIsSolved();
  }

  // kutsutaan lifecyclemetodia ngOnInit, jossa määritellään
  ngOnInit(): void {
    // Palvelun resetIsSolved-metodi kutsutaan, joka asettaa isSolved-tilan arvon falseksi.
    // varmistaa, että kun SecretsComponent-komponentti alustetaan, arvoitus ei ole ratkaistu.
    this.riddleService.getIsSolved();
    // Palvelun getRandomRiddle$-metodi kutsutaan, joka palauttaa Observablen,
    // ja siihen tilataan (subscribe) saadaksemme satunnaisen arvoituksen.
    this.riddleService.getRandomRiddle$().subscribe((riddle) => {
      // määritellään arvoksi satunnaisen arvoituksen arvo
      this.riddle = riddle;
      // määritellään arvoksi satunnaisen arvoituksen oikea vastaus
      this.correctAnswer = riddle.correctAnswer;
    });
  }

  checkAnswer(): void {
    // Tarkistetaan, onko this.correctAnswer määritelty ja vastaus oikein
    if (
      this.correctAnswer &&
      this.answer.toLowerCase() === this.correctAnswer?.toLowerCase()
    ) {
      console.log(this.answer + ' is correct!');
      // Jos vastaus on oikein vaihdetaan isSolved-tilan arvoa
      this.isSolved = !this.isSolved;
      this.riddleService.setIsSolved(true);
    } else {
      // Jos vastaus on väärä, ohjataan ilmoitus joka näytetään 3 sekunnin ajaksi ja tyhjennetään vastauslaatikko
      console.log(this.answer + ' is wrong!');
      this.answer = '';
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 3000);
    }
  }

  // määritellään funktion reset, jossa määritellää propertyn isSolved arvoa falseksi ja kutsutaan this.riddleService.resetIsSolved()-metodia
  // jotta saadaan muutettua riddle.servicessä olevaa isSolved arvoa
  reset(): void {
    this.answer = '';
    this.isSolved = !this.isSolved;
    this.riddleService.resetIsSolved();
  }
}
