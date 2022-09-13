import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private Api:NewsApiService) { }

  SportsNewsData:any = [];

  ngOnInit(): void {
    this.Api.SSSportsNews().subscribe((result)=>{
      console.log(result.articles);
      this.SportsNewsData = result.articles;
    })
  }

}
