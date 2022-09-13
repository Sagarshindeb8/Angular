import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {

  constructor(private api:NewsApiService) { }

  BussinessNewsData:any = [];

  ngOnInit(): void {
    this.api.SSBussinessNews().subscribe((result) =>{
      console.log(result.articles);
      this.BussinessNewsData = result.articles;
    })
  }

}
