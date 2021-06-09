import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  constructor(private route : ActivatedRoute, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.latitude = Number(params['lat']);
      this.longitude = Number(params['long']);
    });
  }
}
