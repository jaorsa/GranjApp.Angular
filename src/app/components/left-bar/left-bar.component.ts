import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
  id: number = 0;
  router: string;

  constructor(private loginService: LoginService,
    private router: Router) {
      this.url = this.router.url;
    }

  ngOnInit() {
  }

  ngDoCheck() {
    this.url = this.router.url;
    this.id = this.loginService.getId();
  }

  logout(){
    this.loginService.setId(0);
    this.router.navigate(['/']);
  }

}
