import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getAllActivities(){
    const path = ' https://granjapp2.appspot.com/activities';
    return this.http.get<Activity[]>(path);
  }

  getActivity(id){
    const path = 'https://granjapp2.appspot.com/activities/';
    return this.http.get<Activity>(path + id);
  }

  createActivity(activity:Activity){
    const path = ' https://granjapp2.appspot.com/activities/';
    return this.http.post(path, activity)
  }

  updateActivity(id, activity:Activity){
    const path = ' https://granjapp2.appspot.com/activities/';
    return this.http.put(path + id,activity);
  }

  deleteActivity(id){
    const path = 'https://granjapp2.appspot.com/activities/';
    return this.http.delete<Activity>(path + id);
  }
}
