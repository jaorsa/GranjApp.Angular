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
      this.animales = team[0].animals.length;
      this.lista_a = team[0].animals;
      this.act = team[0].actividades.length;
      this.lista_act = team[0].actividades;
    });
  }

  ngOnInit() {
  }

}
