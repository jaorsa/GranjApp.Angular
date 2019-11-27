import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    const path = ' http://granjapp2.appspot.com/users';
    return this.http.get<User[]>(path);
  }

  getUser(id){
    const path = 'http://granjapp2.appspot.com/users/';
    return this.http.get<User>(path + id);
  }

  createUser(user:User){
    const path = ' http://granjapp2.appspot.com/users/';
    return this.http.post(path, user)
  }
  
  updateUser(id, user:User){
    const path = ' http://granjapp2.appspot.com/users/';
    return this.http.put(path + id,user);
  }

  deleteUser(id){
    const path = 'http://granjapp2.appspot.com/users/';
    return this.http.delete<User>(path + id);
  }




}