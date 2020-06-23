import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;

  constructor(public authSerice: AuthService) {

  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authSerice.createUser(form.value.email, form.value.password);
  }

}