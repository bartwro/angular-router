import { Injectable } from '@angular/core';
import { VehicleResolved } from '../models/vehicleResolved';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { VehicleService } from './vehicle.service';
import { map, catchError} from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleResolver implements Resolve<VehicleResolved> {

    constructor(private vehicleService: VehicleService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<VehicleResolved> {
        const id = route.paramMap.get('id');
        console.log('resolver is called with id: ' + id);
        if (isNaN(+id)) {
            const message = `Vehicle id was not a number: ${id}`;
            console.error(message);
            return of({vehicle: null, error: message});
        }


        this.vehicleService.getById(+id)
        .subscribe(x => console.log('subscribe: ' + x.make));

        return this.vehicleService.getById(+id)
        .pipe(
            map(data => ({vehicle: data})),
            catchError(error => {
                const message = `Retrieval error: ${error}`;
                console.error(message);
                return of({vehicle: null, error: message});
            })
        );
    }
}
