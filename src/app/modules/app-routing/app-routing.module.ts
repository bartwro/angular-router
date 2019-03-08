import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ],
    { enableTracing: false }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
