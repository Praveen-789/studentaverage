import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymarks',
  templateUrl: './displaymarks.component.html',
  styleUrls: ['./displaymarks.component.css']
})
export class DisplaymarksComponent implements OnInit {

  constructor(private http:HttpClient) { }
  users:any;
  ngOnInit(): void {
    let responce= this.http.get("http://localhost:8069/getUserDetailss");
   responce.subscribe((data)=>this.users=data)
  }

}
