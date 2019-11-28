import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {TeamPageComponent } from "./components/team-page/team-page.component";
import { AnimalPageComponent } from "./components/animal-page/animal-page.component";
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';
import {AccessPageComponent} from './components/access-page/access-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { CatalogoPageComponent } from './components/catalogo-page/catalogo-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'team', component: TeamPageComponent },
  /*{path: 'animal', component: AnimalPageComponent},
  {path: 'login', component: LoginPageComponent },
  {path: 'register', component: RegisterPageComponent },
  {path: 'access', component: AccessPageComponent },*/
  {path: 'dashboard', component: DashboardPageComponent },
  {path: 'catalogo', component: CatalogoPageComponent },
  {path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
