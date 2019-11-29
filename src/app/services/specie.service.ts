import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specie } from '../interfaces/specie';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private http: HttpClient) { }

  getAllSpecies(){
    const path = ' http://granjapp2.appspot.com/specie';
    return this.http.get<Specie[]>(path);
  }

  getSpecie(id){
    const path = 'http://granjapp2.appspot.com/specie/';
    return this.http.get<Specie>(path + id);
  }

  createSpecie(specie:Specie){
    const path = ' http://granjapp2.appspot.com/specie/';
    return this.http.post(path, specie)
  }

  updateSpecie(id, specie:Specie){
    const path = ' http://granjapp2.appspot.com/specie/';
    return this.http.put(path + id,specie);
  }

  deleteSpecie(id){
    const path = 'http://granjapp2.appspot.com/specie/';
    return this.http.delete<Specie>(path + id);
  }
}
