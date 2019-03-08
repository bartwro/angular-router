import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from './modules/user/auth.service';
import { slideInAnimation } from './modules/shared/app.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {

  title = 'angular-app';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    return this.authService.currentUser;
  }

  constructor(private router: Router,
              private authService: AuthService) {
    this.router.events.subscribe((e: Event) => {
      this.checkRouterEvent(e);
    });
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  checkRouterEvent(eventRouter: Event): void {

    console.log(this.loading);
    if (eventRouter instanceof NavigationStart) {
      this.loading = true;
    }

    if (eventRouter instanceof NavigationEnd ||
       eventRouter instanceof NavigationCancel ||
       eventRouter instanceof NavigationError) {
      this.loading = false;
    }
    console.log(this.loading);
  }
}
