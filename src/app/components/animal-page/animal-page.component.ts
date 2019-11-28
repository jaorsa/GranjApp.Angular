import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent implements OnInit {

  constructor(
    private animalService: AnimalService
  ){}

  ngOnInit() {
  }

  getAllAnimals(){
    this.animalService.getAllAnimals()
    .subscribe(animals => {
      console.log(animals);
    });
  }

  getAnimal(){
    this.animalService.getAnimal(1)
    .subscribe(animal => {
      console.log(animal);
    });
  }

  createAnimal(){
    const animal = {
        name: "Vaquita Mu",
        fechaNacimiento: new Date(2019, 4, 4, 17, 23, 42, 11),
        equipo: 1,
        no_h: 4,
        no_m: 8,
        salud: 1,
        etapa: 2,
        especie: 3
    };
    this.animalService.createAnimal(animal)
    .subscribe((newAnimal) => {
      console.log(newAnimal);
    });
  }

  updateAnimal(){
    const animal = {
        name: "Cerdito Oink",
        fechaNacimiento: new Date(2019, 5, 5, 17, 23, 42, 11),
        equipo: 1,
        no_h: 8,
        no_m: 2,
        salud: 1,
        etapa: 1,
        especie: 2
    };
    this.animalService.updateAnimal(1, animal)
    .subscribe((newAnimal) => {
      console.log(newAnimal);
    });
  }

  deleteAnimal(){
    this.animalService.deleteAnimal(3)
    .subscribe(animal => {
      console.log(animal);
    });
  }


}
