import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

}
