import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private zoneService: ZoneService
  ){}

  ngOnInit() {
  }

  getAllZones(){
    this.zoneService.getAllZones()
    .subscribe(zones => {
      console.log(zones);
    });
  }

  getZone(){
    this.zoneService.getZone(1)
    .subscribe(zone => {
      console.log(zone);
    });
  }

  createZone(){
    const zone = {
      name: "ayudame diosito"
    };
    this.zoneService.createZone(zone)
    .subscribe((newZone) => {
      console.log(newZone);
    });
  }

  updateZone(){
    const zone = {
      name: "cambio de nombre"
    };
    this.zoneService.updateZone(3, zone)
    .subscribe((newZone) => {
      console.log(newZone);
    });
  }


}
