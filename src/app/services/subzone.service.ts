import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subzone } from '../interfaces/subzone';

@Injectable({
  providedIn: 'root'
})
export class SubzoneService {

  constructor(private http: HttpClient) { }

  getAllSubzones(){
    const path = ' http://granjapp2.appspot.com/subzone';
    return this.http.get<Subzone[]>(path);
  }

  getSubzone(id){
    const path = 'http://granjapp2.appspot.com/subzone/';
    return this.http.get<Subzone>(path + id);
  }

  createSubzone(subzone:Subzone){
    const path = ' http://granjapp2.appspot.com/subzone';
    return this.http.post(path, subzone);
  }

  updateSubzone(id, subzone:Subzone){
    const path = ' http://granjapp2.appspot.com/subzone/';
    return this.http.put(path + id,subzone);
  }

  deleteSubzone(id){
    const path = 'http://granjapp2.appspot.com/subzone/';
    return this.http.delete<Subzone>(path + id);
  }
}
