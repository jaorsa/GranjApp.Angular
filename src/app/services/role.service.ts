import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRoles(){
    const path = ' http://granjapp2.appspot.com/roles';
    return this.http.get<Role[]>(path);
  }

  getRole(id){
    const path = 'http://granjapp2.appspot.com/roles/';
    return this.http.get<Role>(path + id);
  }

  createRole(role:Role){
    const path = ' http://granjapp2.appspot.com/roles/';
    return this.http.post(path, role)
  }

  updateRole(id, role:Role){
    const path = ' http://granjapp2.appspot.com/roles/';
    return this.http.put(path + id,role);
  }

  deleteRole(id){
    const path = 'http://granjapp2.appspot.com/roles/';
    return this.http.delete<Role>(path + id);
  }
}
