import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {StateService} from "../services/StateService";

@Component({
  selector: "bd-body",
  templateUrl: "/app/views/body.html"
})
export class AppBodyComponent {

  constructor(private router: Router, private statesService: StateService) {

  }

  public user: any;

  
  public isLoggedin(): boolean {
    return this.statesService.states.loggeidIn;
  }
  public showSignin(): boolean {
    return !this.isLoggedin() && !this.statesService.states.signingIn;
  }
  public signout(): void {
    this.statesService.states.loggeidIn = false;
    this.user = null;
  }
  public signin(): void {
    this.statesService.states.signingIn = true;
    this.router.navigate(["signin"]);
  }
  public userDetail(): void {
    
  }
}
