import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { SpecieService } from '../../services/specie.service';
import { ZoneService } from '../../services/zone.service';
import { SubzoneService } from '../../services/subzone.service';
import { CropService } from '../../services/crop.service';
import { AnimalService } from '../../services/animal.service';
import { ActivityService } from '../../services/activity.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  id: number;
  animales: object[] = [];
  act: object[] = [];
  cultivos: object[] = [];
  comodin2: string;
  comodin3;
  comodin4;
  comodin5;

  constructor(private teamService: TeamService,private userService: UserService,
    private specieService: SpecieService,private zoneService: ZoneService,
    private subzoneService: SubzoneService,private cropService: CropService,
    private loginService: LoginService, private animalService: AnimalService,
    private activityService: ActivityService) {
    this.id = this.loginService.getId();
    teamService.getAllTeams().subscribe(team => {
      for(var i:number = 0; i < team[0].actividades.length; i++){
        var comodin1 = "";
        userService.getUser(team[0].actividades[i].usuario).subscribe(u => {
          comodin1 = u.name + " " + u.lastname;
        });
        this.act.push([comodin1, team[0].actividades[i]]);
      }
      for(var i:number = 0; i < team[0].animals.length; i++){
        specieService.getSpecie(team[0].animals[i].especie).subscribe(s => {
          this.comodin2 = s.name;
        });
        this.animales.push([this.comodin2, team[0].animals[i]]);
      }
      for(var i:number = 0; i < team[0].zones.length; i++){
        this.comodin3 = team[0].zones[i];
        zoneService.getZone(team[0].zones[i].id).subscribe(z => {
          for(var j:number = 0; j < z.subzones.length; j++){
            this.comodin4 = z.subzones[j];
            subzoneService.getSubzone(z.subzones[j].id).subscribe(sz => {
              for(var k:number = 0; k < sz.plantings.length; k++){
                this.comodin5 = sz.plantings[k];
                cropService.getCrop(sz.plantings[k].cultivo).subscribe(c => {
                  this.cultivos.push([this.comodin3, this.comodin4, this.comodin5, c]);
                });
              }
            });
          }
        });
      }
    });
  }

  ngOnInit() {
  }

  deleteAnimal(id) {
    this.animalService.deleteAnimal(id).subscribe(msn => {
      console.log(msn);
    });
    setTimeout(() => {location.reload()}, 3000);
  }

  deleteActividad(id) {
    this.activityService.deleteActivity(id).subscribe(msn => {
      console.log(msn);
    });
    setTimeout(() => {location.reload()}, 3000);
  }

  deleteCultivo(id) {
    this.cropService.deleteCrop(id).subscribe(msn => {
      console.log(msn);
    });
    setTimeout(() => {location.reload()}, 3000);
  }

}
