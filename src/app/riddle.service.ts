import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Riddle {
  // jakaa rajapinnan riddle ja sen sisällön muille komponenteille
  riddle: string;
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root',
})
// jakaa luokan RiddleService muille komponenteille
export class RiddleService {
  // helpompi versio
  // alustetaan yksityinen riddles, joka on tyyppiä Riddle[], täältä saadaan satunnainen arvoitus
  // ja sen oikea vastaus secrets.componentille
  // private riddles: Riddle[] = [
  //   {
  //     riddle: 'What goes up but never comes down?',
  //     correctAnswer: 'Your age',
  //   },
  //   {
  //     riddle:
  //       'How many months of the year have 28 days? (Hint: the answer should be a number)',
  //     correctAnswer: '12',
  //   },
  //   {
  //     riddle: 'What has to be broken before you can use it?',
  //     correctAnswer: 'An egg',
  //   },
  //   {
  //     riddle: 'I have a tail and a head, but no body. What am I?',
  //     correctAnswer: 'A coin',
  //   },
  //   {
  //     riddle: 'I am always in front and never behind. What am I?',
  //     correctAnswer: 'The future',
  //   },

  // ];

  // konstruktori saa parametrikseen httpn joka on tyyppiä HttpClient ja määrittelee sen yksityiseksi
  constructor(private http: HttpClient) {}

  private readonly apiUrl = 'https://riddles-api.vercel.app/random';

  // alustetaan isSolved muuttuja boolean tyypiksi joka saa arvon false
  private isSolved: boolean = false;
  // alustetaan isSolvedKey muuttuja string tyyppiseksi, vain luettavaksi ja joka saa arvon 'Solved'
  private readonly isSolvedKey: string = 'Solved';

  // funktio getRandomRiddle$, joka palauttaa satunnaisen riddlen Observablena käyttäen of funktiota
  getRandomRiddle$(): Observable<Riddle> {
    // helpompi versio
    // const randomRiddle =
    //   this.riddles[Math.floor(Math.random() * this.riddles.length)];

    // return of(randomRiddle);

    // palauttaa APIUrlin vastauksen ja ottaa sen vastaan: käsittelee myöskin niin, että koostaa Riddle rajapinnan uudelleen
    // ja antaa sille arvoksi arvoituksen sekä vastauksen jotka saadaan APIlta
    return this.http.get<Riddle>(this.apiUrl).pipe(
      map((response: any) => {
        // Käsittele API-vastaus ja päivitä correctAnswer answeriksi
        const updatedRiddle: Riddle = {
          riddle: response.riddle,
          correctAnswer: response.answer,
        };
        return updatedRiddle;
      })
    );
  }

  // funktio getIsSolved, joka palauttaa isSolved muuttujan arvon, se on tallennettu LocalStorage
  getIsSolved(): boolean {
    const storedIsSolved = localStorage.getItem(this.isSolvedKey);
    if (storedIsSolved !== null) {
      this.isSolved = JSON.parse(storedIsSolved);
    }
    return this.isSolved;
  }

  // funktio setIsSolved, joka yrittää asettaa isSolved muuttujan arvon LocalStorageen, jos ei onnistu tulostaa errorin
  setIsSolved(value: boolean): void {
    try {
      localStorage.setItem(this.isSolvedKey, JSON.stringify(value));
    } catch (error) {
      console.error('LocalStorage setItem failed:', error);
    }
  }

  // funktio resetIsSolved, joka muuttaa isSolved muuttujan arvon falseksi ja kutsuu setIsSolved metodia jotta
  // localstorageen on asetettu oikea arvo
  resetIsSolved(): void {
    this.isSolved = false;
    this.setIsSolved(this.isSolved);
  }
}
