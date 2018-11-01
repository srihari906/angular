import {Component} from '@angular/core';
import {LoggerService} from '../logger-service/logger.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    LoggerService
  ],
  encapsulation: ViewEncapsulation.None
})

export class SearchBarComponent {
  defaultCustomers = [];
  customerFormControl: FormControl;
  filteredCustomers: any;
  customersAutocomplete: any;

  constructor(private router: Router) {
    this.customerFormControl = new FormControl();
  }

  public requestAutocompleteItems = (text: string): Observable<Response> => {
    return this.filteredCustomers;
  }
}
