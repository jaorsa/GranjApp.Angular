import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  getAllAnimals(){
    const path = ' http://granjapp2.appspot.com/animal';
    return this.http.get<Animal[]>(path);
  }

  getAnimal(id){
    const path = 'http://granjapp2.appspot.com/animal/';
    return this.http.get<Animal>(path + id);
  }

  createAnimal(animal:Animal){
    const path = ' http://granjapp2.appspot.com/animal/';
    return this.http.post(path, animal)
  }
  
  updateAnimal(id, animal:Animal){
    const path = ' http://granjapp2.appspot.com/animal/';
    return this.http.put(path + id,animal);
  }

  deleteAnimal(id){
    const path = 'http://granjapp2.appspot.com/animal/';
    return this.http.delete<Animal>(path + id);
  }




}
