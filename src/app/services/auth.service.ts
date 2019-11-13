import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) { this.user = afAuth.authState; }

  signUp(email: string, password: string){
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email,password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong', err.message);
      });
  }

  login(email: string, password: string){
    this.afAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
    })
    .catch(err =>{
      console.log('Something went wrong :"c', err.message);
    });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }



}
