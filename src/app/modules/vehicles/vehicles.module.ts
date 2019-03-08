import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleEditComponent } from './components/vehicle-edit/vehicle-edit.component';
import { RouterModule } from '@angular/router';
import { VehicleResolver } from './services/vehicle-resolver.service';
import { VehicleEditInfoComponent } from './components/vehicle-edit-info/vehicle-edit-info.component';
import { VehicleEditTagsComponent } from './components/vehicle-edit-tags/vehicle-edit-tags.component';

@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleDetailsComponent,
    VehicleEditComponent,
    VehicleEditInfoComponent,
    VehicleEditTagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'vehicles',
        children: [
          {
            path: '',
            component: VehicleListComponent
          },
          {
            path: ':id',
            component: VehicleDetailsComponent,
            resolve: {resolvedData: VehicleResolver}
          },
          {
            path: ':id/edit',
            component: VehicleEditComponent,
            resolve: {resolvedData: VehicleResolver},
            children: [
              {
                path: '', redirectTo: 'info', pathMatch: 'full'
              },
              {
                path: 'info', component: VehicleEditInfoComponent
              },
              {
                path: 'tags', component: VehicleEditTagsComponent
              }
            ]
          }
        ]
      },
    ])
  ]
})
export class VehiclesModule { }
