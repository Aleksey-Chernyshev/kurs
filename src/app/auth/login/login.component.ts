import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersServices} from "../../shared/services/users.services";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  'form': FormGroup;

  constructor(private usersService: UsersServices) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  async onSubmit() {
    const formData = this.form.value;
   await this.usersService.getUserByEmail(formData.email)


   // console.log(this.form);
  }
}

