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

  
}
