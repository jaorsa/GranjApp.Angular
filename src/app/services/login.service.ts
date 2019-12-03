import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  id: number;

  constructor(private http: HttpClient) { }

  createLogin(login:Login){
    const path = ' http://granjapp2.appspot.com/login/1';
    return this.http.post(path, login)
  }

  setId(id){
    this.id = id;
  }

  getId(){
    return this.id;
  }
}
