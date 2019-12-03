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

  constructor(private loginService: LoginService,
    private router: Router) {
      this.id = this.loginService.getId();
    }

  ngOnInit() {
    
  }

  ngDoCheck() {
    this.id = this.loginService.getId();
  }

  logout(){
    this.loginService.setId(0);
    this.router.navigate(['/']);
  }

}
