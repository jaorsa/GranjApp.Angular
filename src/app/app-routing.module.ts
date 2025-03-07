import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamPageComponent } from "./components/team-page/team-page.component";
import {LoginPageComponent} from './components/login-page/login-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { CatalogoPageComponent } from './components/catalogo-page/catalogo-page.component';
import { CrearZonaComponent } from './components/crear-zona/crear-zona.component';
import { CrearSubzonaComponent } from './components/crear-subzona/crear-subzona.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent },
  {path: 'team', component: TeamPageComponent },
  {path: 'dashboard', component: DashboardPageComponent },
  {path: 'catalogo', component: CatalogoPageComponent },
  {path: 'crear-zona', component: CrearZonaComponent },
  {path: 'crear-subzona', component: CrearSubzonaComponent },
  {path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
