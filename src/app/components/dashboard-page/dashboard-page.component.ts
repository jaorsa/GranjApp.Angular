import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  animales: object[];
  act: object[] = [];
  comodin:object;

  constructor(private teamService: TeamService,private userService: UserService,) {
    teamService.getAllTeams().subscribe(team => {
      this.animales = team[0].animals;
      for(var i:number = 0; i < team[0].actividades.length; i++){
        this.comodin = team[0].actividades[i];
        userService.getUser(this.comodin.usuario).subscribe(u => {
          console.log(this.comodin);
          this.act.push([u, this.comodin]);
        });
      }
    });
  }

  ngOnInit() {
  }

}
