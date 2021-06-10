import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  label: string = "";

  constructor(private route : ActivatedRoute, private cdRef:ChangeDetectorRef, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Map");

    this.route.queryParams.subscribe(params => {
      this.latitude = Number(params['lat']);
      this.longitude = Number(params['long']);
      this.label = params['label'];
    });
  }
}
