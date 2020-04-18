import { Component } from '@angular/core';
import { HeaderRoutes } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-front';

  routes: HeaderRoutes[] = [
    {
      route: 'home',
      title: 'home'
    },
    {
      route: 'by-date',
      title: 'by date'
    },
    {
      route: 'create',
      title: 'create'
    }
  ]
}
