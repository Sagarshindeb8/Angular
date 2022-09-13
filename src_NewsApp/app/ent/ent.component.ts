import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-ent',
  templateUrl: './ent.component.html',
  styleUrls: ['./ent.component.css']
})
export class EntComponent implements OnInit {

  constructor(private api:NewsApiService) { }

  EntNewsData:any = [];

  ngOnInit(): void {
    this.api.SSEntNews().subscribe((result) =>{
      console.log(result.articles);
      this.EntNewsData = result.articles;
    })
  }

}
