import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  signUp(user:any):Observable<string>{
    return this.http.post("http://localhost:9090/user/signUp",user,{responseType:'text'})
  }

  signIn(user:any):Observable<string> {
    return this.http.post("http://localhost:9090/user/signIn",user,{responseType:'text'});
  }

}

//keep going Brandon
