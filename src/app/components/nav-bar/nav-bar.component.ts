import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  id: number;
  url: string;
  teams;

  constructor(private loginService: LoginService,
    private teamService: TeamService, private router: Router) {
      this.url = this.router.url;
      this.teamService.getAllTeams().subscribe(t => {
        this.teams = t;
      });
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.url = this.router.url;
    this.id = this.loginService.getId();
  }

}
