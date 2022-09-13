import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {

  constructor(private api:NewsApiService) { }

  //display headlines data
  topHeadlinesData:any = [];

  ngOnInit(): void {
    this.api.Headlines().subscribe((result) =>{
      console.log(result.articles);
      this.topHeadlinesData = result.articles;
    })
  }



}
