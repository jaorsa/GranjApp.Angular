import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";


import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TeamPageComponent } from "./components/team-page/team-page.component";
import { AnimalPageComponent } from "./components/animal-page/animal-page.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AccessPageComponent } from './components/access-page/access-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { AuthService } from './services/auth.service';
import { CatalogoPageComponent } from './components/catalogo-page/catalogo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeamPageComponent,
    AnimalPageComponent,
    NavBarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AccessPageComponent,
    NotFoundPageComponent,
    DashboardPageComponent,
    LeftBarComponent,
    CatalogoPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireModule.initializeApp(environment.firebaseConfig)
    //AngularFirestoreModule, // imports firebase/firestore, only needed for database features

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
