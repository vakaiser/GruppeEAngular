import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from "@agm/core";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = 47;
  longitude: number = 26;

  constructor() { }

  ngOnInit(): void {
  }

}
