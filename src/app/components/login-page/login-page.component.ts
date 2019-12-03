import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  id: number;
  email: string;
  password: string;

  constructor(private loginService: LoginService,
    private userService: UserService,
    private router: Router) {
      this.id = this.loginService.getId();
    }

  ngOnInit() {
  }

  onSubmitLogin() {
    var user = {
      correo: this.email,
      password: sha256(this.password),
    };
    this.userService.getAllUsers().subscribe(users => {
      for(var i:number = 0; i < users.length; i++){
        if(users[i].correo == user.correo && users[i].password == user.password){
          this.loginService.setId(users[i].id);
          this.loginService.createLogin(user).subscribe(tkn => {
            this.router.navigate(['/dashboard', {}]);
          });
        }
      }
    });
    this.email = this.password = "";
  }

}
