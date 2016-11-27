import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StateService} from "../services/StateService";

@Component({
  templateUrl: '/app/views/signin.html'
})
export class AppSigninComponent { 

  constructor(private router:Router, private statesService: StateService){}

    public cancel(): void {
      this.statesService.states.signingIn = false;
      this.router.navigate(["/home"]);
    }

}
