import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
// tuodaan title, component, oninit ja hostlistener
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // määritetään ja alustetaan muuttuja isHidden
  isHidden: boolean = true;
  // konstruktorissa injektoidaan titleService
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('PP');
    // määritellään title
  }

  // määritetään hostlistener, parametreiksi annetaan tapahtuma jota halutaan kuunnella
  @HostListener('window:scroll', [])
  onScroll(): void {
    // määritellään isHidden arvon muutos, kun sivun yläosasta liikutaan 10px alaspäin
    this.isHidden = window.scrollY > 10;
  }

  // määritellään button tapahtuma, jolla ohjataan käyttäjä takaisin sivun yläosaan
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
