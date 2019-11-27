import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ){}

  ngOnInit() {
  }

  getAllUsers(){
    this.userService.getAllUsers()
    .subscribe(users => {
      console.log(users);
    });
  }

  getUser(){
    this.userService.getUser(7)
    .subscribe(user => {
      console.log(user);
    });
  }

  createUser(){
    const user = {
      name: "Isela",
      lastname: "Crello",
      correo: "A01234567@itesm.mx"
    };
    this.userService.createUser(user)
    .subscribe((newUser) => {
      console.log(newUser);
    });
  }

  updateUser(){
    const user = {
      name: "Larry",
      lastname: "Casiesta",
      correo: "A07654321@tec.mx"
    };
    this.userService.updateUser(7, user)
    .subscribe((newUser) => {
      console.log(newUser);
    });
  }

  deleteUser(){
    this.userService.deleteUser(9)
    .subscribe(user => {
      console.log(user);
    });
  }


}
