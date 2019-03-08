import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule
  ]
})
export class NotificationModule { }
