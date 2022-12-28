import { Component, OnInit } from '@angular/core';
import { MarkssService } from '../markss.service';
import { User } from '../user';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  user:User =new User();
  constructor(private testserv:MarkssService) { }

  ngOnInit(): void {
  }

  openaccount(event:any){
    console.log("user in ts",this.user);
   this.testserv.saveuser(this.user).subscribe(user=>{
     console.log(user);
   });
   alert("marks added")
 }

}
