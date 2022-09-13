import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _http:HttpClient) { }

  //Top Headlines Api URL
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=a4e0b2c67fc346c8b6c7cbc769e8cc9c';

  //Tech news Api URL
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a4e0b2c67fc346c8b6c7cbc769e8cc9c';

  //Bussiness news Api URL
  BussinessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a4e0b2c67fc346c8b6c7cbc769e8cc9c';

  //Sports news Api URL
  SportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a4e0b2c67fc346c8b6c7cbc769e8cc9c';

  //Health news Api URL
  HealthNews = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a4e0b2c67fc346c8b6c7cbc769e8cc9c';

  //Entertainment news Api URL
  EntertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a4e0b2c67fc346c8b6c7cbc769e8cc9c';
  
  //Function for Headlines
  Headlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews);
  }

  //Function for Tech News
  SSTechNews():Observable<any>{
    return this._http.get(this.techNews);
  }
  
  //Function for Bussiness News
  SSBussinessNews():Observable<any>{
    return this._http.get(this.BussinessNews);
  }
    
  //Function for Sports News
  SSSportsNews():Observable<any>{
    return this._http.get(this.SportsNews);
  }

  //Function for Health News
  SSHealthNews():Observable<any>{
    return this._http.get(this.HealthNews);
  }
  
  //Function for Entertainment News
  SSEntNews():Observable<any>{
    return this._http.get(this.EntertainmentNews);
  }

}
