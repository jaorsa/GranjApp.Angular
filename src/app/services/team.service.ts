import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getAllTeams(){
    const path = ' http://granjapp2.appspot.com/teams';
    return this.http.get<Team[]>(path);
  }

  getTeam(id){
    const path = 'http://granjapp2.appspot.com/teams/';
    return this.http.get<Team>(path + id);
  }

  createTeam(team:Team){
    const path = ' http://granjapp2.appspot.com/teams';
    return this.http.post(path, team)
  }
  
  updateTeam(id, team:Team){
    const path = ' http://granjapp2.appspot.com/teams/';
    return this.http.put(path + id,team);
  }

  deleteTeam(id){
    const path = 'http://granjapp2.appspot.com/teams/';
    return this.http.delete<Team>(path + id);
  }




}
