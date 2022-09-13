import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api:NewsApiService) { }

  HealthNewsData:any = [];

  ngOnInit(): void {
    this.api.SSHealthNews().subscribe((result) =>{
      console.log(result.articles);
      this.HealthNewsData = result.articles;
    })
  }



}
