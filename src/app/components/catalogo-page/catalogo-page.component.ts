import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.scss']
})
export class CatalogoPageComponent implements OnInit {
  teams;
  zonas;
  lista_zonas;
  i_zones:number[] = [];

  constructor(private teamService: TeamService,) {
    teamService.getAllTeams().subscribe(team => {
      this.teams = team[0];
      this.zonas = team[0].zones.length;
      this.lista_zonas = team[0].zones;
      for(var i:number = 0; i < this.zonas; i++){
        this.i_zones.push(team[0].zones[i].id);
      }
      console.log(this.i_zones);
    });

   }

  ngOnInit() {

  }

}
