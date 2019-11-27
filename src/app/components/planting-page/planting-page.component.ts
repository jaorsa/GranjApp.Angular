import { Component, OnInit } from '@angular/core';
import { PlantingService } from '../../services/planting.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './planting-page.component.html',
  styleUrls: ['./planting-page.component.scss']
})
export class PlantingPageComponent implements OnInit {

  constructor(
    private plantingService: PlantingService
  ){}

  ngOnInit() {
  }

  getAllPlantings(){
    this.plantingService.getAllPlantings()
    .subscribe(plantings => {
      console.log(plantings);
    });
  }

  getPlanting(){
    this.plantingService.getPlanting(2)
    .subscribe(planting => {
      console.log(planting);
    });
  }

  createPlanting(){
    const planting = {
      salud: 1,
      cultivo: 2,
      subzona: 3
    };
    this.plantingService.createPlanting(planting)
    .subscribe((newPlanting) => {
      console.log(newPlanting);
    });
  }

  updatePlanting(){
    const planting = {
        salud: 3,
        cultivo: 2,
        subzona: 1,
    };
    this.plantingService.updatePlanting(2, planting)
    .subscribe((newPlanting) => {
      console.log(newPlanting);
    });
  }

  deletePlanting(){
    this.plantingService.deletePlanting(3)
    .subscribe(planting => {
      console.log(planting);
    });
  }


}
