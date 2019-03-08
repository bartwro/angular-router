import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  allVehicles = [
    {id: 1, make: 'Honda', model: 'Accord'} as Vehicle,
    {id: 2, make: 'Toyota', model: 'Camry'} as Vehicle,
    {id: 3, make: 'Honda', model: 'Civic'} as Vehicle,
  ];

  constructor() { }


  getAll(): Observable<Vehicle[]> {
    return of(this.allVehicles).pipe(delay(1000));
  }

  getById(id: number): Observable<Vehicle> {
    return this.getAll()
    .pipe(map(list => list.find(x => x.id === id)));
  }
}
