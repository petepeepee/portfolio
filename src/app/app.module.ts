// päämoduuli, joka määrittelee sovelluksen moduulirakenteen ja konfiguraation
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { CodingComponent } from './coding/coding.component';
import { TrainingComponent } from './training/training.component';
import { HistoryComponent } from './history/history.component';
import { SecretsComponent } from './secrets/secrets.component';
import { InfoService } from './info.service';
import { TicorporateComponent } from './ticorporate/ticorporate.component';

@NgModule({
  // määritellään kaikki sovelluksen komponentit, joita käytetään tässä moduulissa
  declarations: [
    AppComponent,
    NavbarComponent,
    HobbiesComponent,
    AboutMeComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    CodingComponent,
    TrainingComponent,
    HistoryComponent,
    SecretsComponent,
    TicorporateComponent,
  ],
  // määritellään kaikki Angular-moduulit, joita käytetään tässä päämoduulissa
  // BrowserModule: Tarvitaan sovelluksen suorittamiseen selaimessa.
  // AppRoutingModule: Mahdollistaa reitityksen sovelluksessa.
  // FormsModule: Antaa pääsyn kahdensuuntaiseen datan sidontaan ja lomakkeisiin.
  // HttpClientModule: Mahdollistaa HTTP-pyynnöt, kuten REST API -kutsut.
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  // palvelut (services), jotka ovat saatavilla sovelluksen laajuisesti
  providers: [InfoService],
  // määritellään sovelluksen pääkomponentti, joka käynnistetään, kun sovellus käynnistyy
  bootstrap: [AppComponent],
})
export class AppModule {}
