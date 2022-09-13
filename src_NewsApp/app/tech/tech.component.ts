import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:NewsApiService) { }

  techNewsData:any = [];

  ngOnInit(): void {
    this.api.SSTechNews().subscribe((result) =>{
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
  }

}
