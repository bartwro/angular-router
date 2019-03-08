import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value.login);
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password);
    this.router.navigate(['/welcome']);
  }

}
