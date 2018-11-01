import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LookUpModel } from './lookup.model';

import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../modules/authentication/authentication';

@Injectable()
export class LookupService {
  private headers: HttpHeaders;
  private translations: any;

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    var currentCulture = localStorage.getItem('Zen:currentlang') == null ? 'us' : localStorage.getItem('Zen:currentlang');
    currentCulture = currentCulture == "en" ? "us" : currentCulture;
    //this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.getToken(), 'Accept-Language': currentCulture });
    this.headers=new HttpHeaders({'Authorization': 'Negotiate'})
  }

  
}
