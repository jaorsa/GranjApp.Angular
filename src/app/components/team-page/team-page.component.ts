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
  roles;
  constructor(
    private teamService: TeamService,
    private roleService: RoleService,
  ){
    teamService.getAllTeams().subscribe(team => {
      this.teams = team;
    });
    roleService.getAllRoles().subscribe(role => {
      this.roles = role;
    });
  }

  ngOnInit() {

  }

}
