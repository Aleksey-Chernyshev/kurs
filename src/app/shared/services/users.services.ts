import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";


@Injectable()
export class UsersServices{
  //private response: any;

  constructor() {}

 async getUserByEmail(email: string) {

    await fetch(`http://localhost:3000/users?email=${email}`).
      then(response=>response.json())
      .then(response=>console.log(response))

  }
}
