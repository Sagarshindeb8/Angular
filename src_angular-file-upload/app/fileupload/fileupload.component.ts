import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  shortLink:string="";
  loading:boolean = false;
  file!:File;


  constructor(private fileService:FileUploadService) { }

  ngOnInit(): void {
  }

  OnChange(event:any)
  {
    this.file = event.target.files[0];
  }

  onUpload()
  {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileService.upload(this.file).subscribe((event:any) => {
      if(typeof(event) === 'object'){
        this.shortLink = event.link;
        this.loading = false;
      }
    });
  }

}
