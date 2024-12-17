import { Injectable } from '@angular/core';
//yksinkertainen in memory tietokanta, josta haetaan tietoa muille komponenteille

//in memory web apilla olisin voinut tehdä tämän siten, että installoinut apin, luonut esimerkiksi
//inMemoryDataServicen, importoinut inmemorydbservicen service komponenttiin
//ja asettanut sen implementoimaan sitä, luonut databasen jossa esimerkiksi työhistoria
//rekisteröinty inmemorywebapi app.modulessa
//importoinut httpclient komponenttiin ja asettanut constructorin parametriksi
//luokan määrityksissä määrittänyt esimerkiksi apiUrlin ja workXPin
// ngOnInitissä hakenut workXP luokan muuttujaan http.getillä apiurlista datan
//ja alustanut sen workXP muuttujan arvoksi
//en tehnyt sitä, koska unohdin sen ja muistin vasta tänä aamuna

// injectoidaan tietokanta komponenteille
@Injectable({
  providedIn: 'root',
})
// jakaa luokan InfoService muille komponenteille
export class InfoService {
  // määritellään privaatteja propertyja, jotka voidaan injektoida muihin komponentteihin
  private workXP: { time: string; place: string; assignment: string }[] = [
    {
      time: '3/2021 - present',
      place: 'Prisma Keljo',
      assignment:
        'Asiakaspalvelija/myyjä - customer service representive/sales person',
    },
    {
      time: '11/2019 - 11/2020',
      place: 'SATS Finland Oy',
      assignment: 'Personal Trainer',
    },
    {
      time: '8/2017 - 11/2019',
      place: 'Esperi Care',
      assignment:
        'Ammatillinen tukihenkilö Kajaanin/Kainuun avopalveluyksikkö - Proffessional support person in Kajaani/Kainuu`s area',
    },
    {
      time: '2/2019 - 5/2019',
      place: 'Kajaanin Pallokerho',
      assignment: 'Pesäpallovalmentaja - Finnish baseball coach',
    },
    {
      time: '5/2017 - 8/2017',
      place: 'Go On',
      assignment:
        'Tuotantotyöntekijä Kannustalo Oy:ssä - Production worker in Kannustalo Oy',
    },
    {
      time: '5/2016-8/2016',
      place: 'Kajaanin Pallokerho',
      assignment:
        'Pesiskoulun rehtori/ohjaaja - Finnish baseball instructor for children',
    },
  ];

  private education: { school: string; degree: string; time: string }[] = [
    {
      school:
        'Jyväskylän Ammattikorkeakoulu - Jamk University of Applied Sciences',
      degree: 'Business Information Technology',
      time: '8/2022 - present',
    },
    {
      school:
        'Kajaanin Ammattikorkeakoulu - Kamk University of Applied Sciences',
      degree: 'Bachelor of Sports and Leisure Management',
      time: '8/2013 - 6/2016',
    },
    {
      school: 'Kannuksen lukio',
      degree: 'Ylioppilastutkinto',
      time: '8/2009 - 6/2012',
    },
  ];

  private languageSkills: { language: string; level: string }[] = [
    { language: 'Finnish', level: 'Native language' },
    { language: 'English', level: 'Excellent' },
    { language: 'Svedish', level: 'Satisfactory' },
  ];

  private trainingKnowledge: { method: string }[] = [
    { method: 'Strength training' },
    { method: 'Sprinting' },
    { method: 'Finnish baseball' },
    { method: 'Plyometric training' },
  ];

  private codingSkills: { skill: string }[] = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'JavaScript' },
    { skill: 'Angular' },
    { skill: 'TypeScript' },
    { skill: 'MySQL' },
    { skill: 'MongoDB' },
    { skill: 'Svelte' },
  ];

  private randomFacts: string[] = [
    'I played bass in a band and in couple of gigs too',
    'I love reading and my all time favourite series of books was the Harry Potter series',
    'I like to sing in my car',
    'I am very social and physically active but I enjoy staying home and watching movies and series with my girlfriend a lot',
    'Most of my life my sport was Finnish baseball but novadays I enjoy other ball sports more',
  ];

  private randomFact: string = '';

  private links: { name: string; url: string }[] = [
    { name: 'GitHub', url: 'https://github.com/petepeepee' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/petri-paasila-5a0a441ba',
    },
    { name: 'Instagram', url: 'https://www.instagram.com/petripaasila' },
    { name: 'Facebook', url: 'https://www.facebook.com/petri.paasila.1' },
  ];
  // määritellään myös public metodeja, joita voidaan käyttää saamaan privaateista propertyista tietoa muualle sovellukseen
  public getWorkXP() {
    return this.workXP;
  }

  public getEducation() {
    return this.education;
  }

  public getLanguageSkills() {
    return this.languageSkills;
  }

  public getTrainingKnowledge() {
    return this.trainingKnowledge;
  }

  public getCodingSkills() {
    return this.codingSkills;
  }

  public getRandomFacts() {
    this.randomFact = this.randomFacts[Math.floor(Math.random() * 5)];
    return this.randomFact;
  }

  public getLinks() {
    return this.links;
  }
}
