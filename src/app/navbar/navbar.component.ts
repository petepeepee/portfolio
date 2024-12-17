import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

// jaetaan luokka NavbarComponent
export class NavbarComponent {
  showMenu!: boolean;
  // määritellään property showMenu ja sen arvoksi false, tämän muuttuessa navigointipalkki vaihtuu hampurilaisvalikoksi
  constructor() {
    this.showMenu = false;
  }

  // määritetään clicktapahtumalle funktio
  clickMenu(): void {
    this.showMenu = !this.showMenu;
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  // määritetään resetMenu funktio joka asettaa showMenu arvon falseksi eli vaihdettaessa ruudun kokoa
  // hampurilaisvalikko katoaa ja normaali navigointipalkki tulee esiin
  resetMenu(): void {
    this.showMenu = false;
  }

  // määritetään property menuItems joka sisältää eri reittien tiedot, tämä jaetaan
  // html komponenttiin ja se luo jokaisesta oliosta itemin navigointipalkeille
  menuItems: { link: string; label: string }[] = [
    { link: 'aboutme', label: 'Origin story' },
    { link: 'coding', label: 'Coding' },
    { link: 'training', label: 'Training' },
    { link: 'hobbies', label: 'Hobbies' },
    { link: 'history', label: 'Resume' },
    { link: 'secrets', label: 'Secrets' },
    { link: 'ticorporate', label: 'Ticorporate' },
  ];
}
