import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: string;
  redirectUrl: string;

  constructor() { }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(login: string, pass: string): void {
    this.currentUser = login;
  }

  logout(): void {
    this.currentUser = null;
  }
}
