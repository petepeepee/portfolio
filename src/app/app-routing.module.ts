// komponentti pitää sisällään reitit sovelluksessa ja on vastuussa reiteille ohjauksesta

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CodingComponent } from './coding/coding.component';
import { TrainingComponent } from './training/training.component';
import { HistoryComponent } from './history/history.component';
import { SecretsComponent } from './secrets/secrets.component';
import { TicorporateComponent } from './ticorporate/ticorporate.component';

export const routes: Routes = [
  { path: 'secrets', component: SecretsComponent },
  {
    path: 'aboutme',
    component: AboutMeComponent,
  },
  {
    path: 'hobbies',
    component: HobbiesComponent,
  },
  {
    path: 'coding',
    component: CodingComponent,
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'ticorporate',
    component: TicorporateComponent,
  },
  {
    path: '',
    redirectTo: '/aboutme',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
