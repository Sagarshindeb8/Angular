import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsApiService } from './service/news-api.service';
import { TechComponent } from './tech/tech.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { EntComponent } from './ent/ent.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    TechComponent,
    BussinessComponent,
    SportsComponent,
    HealthComponent,
    EntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
