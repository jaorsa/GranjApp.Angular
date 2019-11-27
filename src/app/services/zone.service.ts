import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../interfaces/zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) { }

  getAllZones(){
    const path = 'http://granjapp2.appspot.com/zone';
    return this.http.get<Zone[]>(path);
  }

  getZone(id:number){
    const path = 'http://granjapp2.appspot.com/zone/';
    return this.http.get<Zone>(path + id);
  }

  createZone(zone:Zone){
    const path = ' http://granjapp2.appspot.com/zone';
    return this.http.post(path, zone)
  }
  
  updateZone(id, zone:Zone){
    const path = ' http://granjapp2.appspot.com/zone';
    return this.http.put(path +'/' +id,zone);
  }

  deleteZone(id:number){
    const path = 'http://granjapp2.appspot.com/zone/';
    return this.http.delete<Zone>(path + id);
  }




}
