import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  teams;
  users: number;
  lista;

  constructor(
    private teamService: TeamService,
    private roleService: RoleService,
  ){
    teamService.getAllTeams().subscribe(team => {
      this.teams = team;
      this.users = team[3].usuarios.length;
      this.lista = team[3].usuarios;
    });
  }

  ngOnInit() {

  }

  deleteRole(id){
    this.roleService.deleteAnimal(id).subscribe(msn => {
      console.log(msn);
    });
  }

}
