import { Component, OnInit } from '@angular/core';
import { HeaderRoutes } from '../models';

enum TypeOfData {
  daily,
  total
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  homeroutes: HeaderRoutes[] = [
    {
      route: 'daily',
      title: 'Daily'
    },
    {
      route: 'total',
      title: 'Total'
    }
  ]

}
