import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.scss']
})
export class CatalogoPageComponent implements OnInit {
  teams;
  zonas;
  lista_zonas;
  i_zones:object[] = [];

  constructor(private teamService: TeamService,
  private zoneService: ZoneService,) {
    teamService.getAllTeams().subscribe(team => {
      this.teams = team[0];
      this.zonas = team[0].zones.length;
      this.lista_zonas = team[0].zones;
      for(var i:number = 0; i < this.zonas; i++){
        zoneService.getZone(this.lista_zonas[i].id).subscribe(s => {
          for(var j:number = 0; j < s.subzones.length; j++){
            this.i_zones.push([s.subzones[j],s]);
          }
        });
      }
    });
   }

  ngOnInit() {

  }

}
