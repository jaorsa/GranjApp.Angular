import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  constructor(
    private teamService: TeamService
  ){}

  ngOnInit() {
  }

  getAllTeams(){
    this.teamService.getAllTeams()
    .subscribe(teams => {
      console.log(teams);
    });
  }

  getTeam(){
    this.teamService.getTeam(1)
    .subscribe(team => {
      console.log(team);
    });
  }

  createTeam(){
    const team = {
      name: "Linces :v",
      description: "que equipo?"
    };
    this.teamService.createTeam(team)
    .subscribe((newTeam) => {
      console.log(newTeam);
    });
  }

  updateTeam(){
    const team = {
      name: "equipo dinamita",
      description: "porfis funciona"
    };
    this.teamService.updateTeam(3, team)
    .subscribe((newTeam) => {
      console.log(newTeam);
    });
  }

  deleteTeam(){
    this.teamService.deleteTeam(2)
    .subscribe(team => {
      console.log(team);
    });
  }


}
