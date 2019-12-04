import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../services/zone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-zona',
  templateUrl: './crear-zona.component.html',
  styleUrls: ['./crear-zona.component.scss']
})
export class CrearZonaComponent implements OnInit {
  name:string;

  constructor(private zoneService: ZoneService, private router: Router) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    var zona = {
      name: this.name,
      team: 3,
      subzones: [],
    }
    this.zoneService.createZone(zona).subscribe(s => {
      this.router.navigate(['/catalogo', {}]);
    });
  }
}
