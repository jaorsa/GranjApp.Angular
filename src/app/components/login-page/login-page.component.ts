import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;
  token: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    /*this.authService.login(this.email, this.password);
    this.email = this.password = '';*/
    var login = {
      correo: this.email,
      password: sha256(this.password),
    };
    this.loginService.createLogin(login).subscribe(tkn => {
      console.log(tkn);
    });
    this.email = this.password = "";
  }

}
