import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class AppComponent {
  title = 'Sample Project';
}
