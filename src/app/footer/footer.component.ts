import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

// luokassa FooterComponent määritellään julkinen property links ja sen tyyppi sekä muoto
export class FooterComponent {
  public links: { name: string; url: string }[] = [];
  // konstruktoriin on injektoitu infoService ja siinä määritellään propertyn links arvoksi this.infoService.getLinks()
  constructor(private infoService: InfoService) {
    this.links = this.infoService.getLinks();
  }
}
