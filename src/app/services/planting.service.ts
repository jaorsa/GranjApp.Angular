import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planting } from '../interfaces/planting';

@Injectable({
  providedIn: 'root'
})
export class PlantingService {

  constructor(private http: HttpClient) { }

  getAllPlantings(){
    const path = ' https://granjapp2.appspot.com/planting';
    return this.http.get<Planting[]>(path);
  }

  getPlanting(id){
    const path = 'https://granjapp2.appspot.com/planting/';
    return this.http.get<Planting>(path + id);
  }

  createPlanting(planting:Planting){
    const path = ' https://granjapp2.appspot.com/planting/';
    return this.http.post(path, planting)
  }

  updatePlanting(id, planting:Planting){
    const path = ' https://granjapp2.appspot.com/planting/';
    return this.http.put(path + id,planting);
  }

  deletePlanting(id){
    const path = 'https://granjapp2.appspot.com/planting/';
    return this.http.delete<Planting>(path + id);
  }




}
