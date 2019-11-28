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
      name: "Soila",
      lastname: "Cerda",
      correo: "A03543334@itesm.mx",
      estrellas: 6
    };
    this.userService.createUser(user)
    .subscribe((newUser) => {
      console.log(newUser);
    });
  }

  updateUser(){
    const user = {
      name: "Jacky",
      lastname: "Chan",
      correo: "xXx_NinJacky_xXx@yahoo.mx",
      estrellas: 7
    };
    this.userService.updateUser(13, user)
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
