import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  animales: number;
  act: number;
  lista_a;
  lista_act;

  constructor(private teamService: TeamService,) {
    teamService.getAllTeams().subscribe(team => {
      this.animales = team[3].animals.length;
      this.lista_a = team[3].animals;
      this.act = team[3].actividades.length;
      this.lista_act = team[3].actividades;
    });
  }

  ngOnInit() {
  }

}
