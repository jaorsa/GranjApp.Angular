import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { SpecieService } from '../../services/specie.service';
import { ZoneService } from '../../services/zone.service';
import { SubzoneService } from '../../services/subzone.service';
import { CropService } from '../../services/crop.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  animales: object[] = [];
  act: object[] = [];
  cultivos: object[] = [];
  comodin1:object;
  comodin2:object;
  comodin3:object;
  comodin4:object;
  comodin5:object;

  constructor(private teamService: TeamService,private userService: UserService,
    private specieService: SpecieService,private zoneService: ZoneService,
    private subzoneService: SubzoneService,private cropService: CropService,) {
    teamService.getAllTeams().subscribe(team => {
      for(var i:number = 0; i < team[0].actividades.length; i++){
        this.comodin1 = team[0].actividades[i];
        userService.getUser(team[0].actividades[i].usuario).subscribe(u => {
          this.act.push([u, this.comodin1]);
        });
      }

      for(var i:number = 0; i < team[0].animals.length; i++){
        this.comodin2 = team[0].animals[i];
        specieService.getSpecie(team[0].animals[i].especie).subscribe(s => {
          this.animales.push([s, this.comodin2]);
        });
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

}
