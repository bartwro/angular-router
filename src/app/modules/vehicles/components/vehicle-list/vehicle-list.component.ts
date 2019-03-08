import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicleList = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService
    .getAll()
    .subscribe(vehicles =>
      this.vehicleList = vehicles);
  }

}
