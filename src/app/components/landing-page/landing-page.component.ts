import { Component, OnInit } from '@angular/core';
import {CONFIG} from "../../config";
import {AuthService} from '../../services/auth-service/auth.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public authUrl: string = `${CONFIG.cas_auth_url}?service=${CONFIG.service_url}`;

  loggedIn : boolean= true;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loggedIn = true;
  }

  navigateToRides(){
    this.router.navigate(['/rides'])
      .then((success) => console.log(success));
  }



}
