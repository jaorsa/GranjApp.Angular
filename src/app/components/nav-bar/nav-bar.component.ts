import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  id: number;

  constructor(private loginService: LoginService, ) {
    this.id = this.loginService.getId();
  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.id = this.loginService.getId();
  }

}
