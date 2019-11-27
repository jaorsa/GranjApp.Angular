import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  name = new FormControl('');

  constructor(
    private zoneService: ZoneService,
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
    this.zoneService.getZone(2)
    .subscribe(zone => {
      console.log(zone);
    });
  }

  createZone(){
    const zone = {
      name: "zona4",
      team: 1
    };
    this.zoneService.createZone(zone)
    .subscribe((newZone) => {
      console.log(newZone);
    });
  }

  deleteZone(){
    this.zoneService.deleteZone(6)
    .subscribe(zone => {
      console.log(zone);
    });
  }

  updateZone(){
    const zone = {
      name: "zone2.5",
      team: 2
    };
    this.zoneService.updateZone(2, zone)
    .subscribe((newZone) => {
      console.log(newZone);
    });
  }


}
