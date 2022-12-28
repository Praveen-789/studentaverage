import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MarkssService {

  private userposturl!: string;
  constructor(private http:HttpClient) {
    this.userposturl='http://localhost:8069/postuserdataa';

   }

   saveuser(user:User){
    //console.log(user.name+" - "+user.email);
    return this.http.post<User>(this.userposturl,user)
   }
}
