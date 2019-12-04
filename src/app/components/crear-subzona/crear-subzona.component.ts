import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { SubzoneService } from '../../services/subzone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-subzona',
  templateUrl: './crear-subzona.component.html',
  styleUrls: ['./crear-subzona.component.scss']
})
export class CrearSubzonaComponent implements OnInit {
  name:string;
  zone:number;
  zones;


  constructor(private teamService: TeamService, private router: Router,
    private subzoneService: SubzoneService) {
    this.teamService.getAllTeams().subscribe(t => {
      this.zones = t[0].zones;
    });
  }

  ngOnInit() {
  }

  onSubmitLogin(){
    var subzona = {
      name: this.name,
      zone: Number(this.zone),
      plantings: [],
    }
    console.log(subzona);
    this.subzoneService.createSubzone(subzona).subscribe(s => {
      this.router.navigate(['/catalogo', {}]);
    });
  }
}
