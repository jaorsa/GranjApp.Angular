import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password:string;

  constructor(public authService: AuthService) {}


  ngOnInit() {
  }

  onSubmitaddUser(){
    this.authService.signUp(this.email, this.password); 
    this.email = this.password = '';
  }



}
