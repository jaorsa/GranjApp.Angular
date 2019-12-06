import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crop } from '../interfaces/crop';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private http: HttpClient) { }

  getAllCrops(){
    const path = ' https://granjapp2.appspot.com/crops';
    return this.http.get<Crop[]>(path);
  }

  getCrop(id){
    const path = 'https://granjapp2.appspot.com/crops/';
    return this.http.get<Crop>(path + id);
  }

  createCrop(crop:Crop){
    const path = ' https://granjapp2.appspot.com/crops/';
    return this.http.post(path, crop)
  }

  updateCrop(id, crop:Crop){
    const path = ' https://granjapp2.appspot.com/crops/';
    return this.http.put(path + id,crop);
  }

  deleteCrop(id){
    const path = 'https://granjapp2.appspot.com/crops/';
    return this.http.delete<Crop>(path + id);
  }
}
