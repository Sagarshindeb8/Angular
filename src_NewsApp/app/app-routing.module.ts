import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';
import { EntComponent } from './ent/ent.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

const routes: Routes = [
  {path: '', component:TopHeadlinesComponent}, //TopHeadlines & Home
  {path: 'tech', component:TechComponent}, //Tech news
  {path: 'bussiness', component:BussinessComponent}, //Bussiness news
  {path: 'sports', component:SportsComponent}, //Sports news
  {path: 'health', component:HealthComponent}, //Health news
  {path: 'ent', component:EntComponent} //Entertainment news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
