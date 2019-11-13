import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public ref: string = "";
  private router: Router;

  constructor(public authService: AuthService ) { 
    
  }

  ngOnInit() {
    //this.ref = this.router.url;
    
  }

  onClickLogout(){
    this.authService.logout();
  }

}
