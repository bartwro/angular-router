import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {

  vehicle = {};
  pageTitle = 'Edit Vehicle';
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService) {
      this.vehicle =
        this.route.snapshot.data.resolvedData.vehicle;
    }

  ngOnInit() {
    // this.route.paramMap.subscribe(paramMap => {
    //   const id = +paramMap.get('id');
    //   this.vehicle = this.vehicleService.getById(id);
    // });
    this.route.data.subscribe(data => {
      this.vehicle = data.resolvedData.vehicle;
      this.errorMessage = data.resolvedData.error;
      this.pageTitle =
      `Edit: ${data.resolvedData.vehicle.make} ${data.resolvedData.vehicle.model}`;
    });
  }

  saveProduct(): void {
  }

  deleteVehicle(): void {
  }

}
