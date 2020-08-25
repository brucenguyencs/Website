import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {state: 'home'} },
  { path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'} },
  { path: 'experience', component: ExperienceComponent, data: {state: 'experience'} },
  { path: 'contact', component: ContactComponent, data: {state: 'contact'} },
  { path: '**', redirectTo: '', data: {state: 'home'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
