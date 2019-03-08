import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import {} from 'rxjs';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle = {};
  errorMessage: string;

  constructor(
    private route: ActivatedRoute) {}

  ngOnInit() {
    // this.vehicle =
    //   this.route.snapshot.data.resolvedData.vehicle;
    this.route.data.subscribe(
      data => {
        this.vehicle = data.resolvedData.vehicle;
        this.errorMessage = data.resolvedData.error;
      }
    );
  }
}
