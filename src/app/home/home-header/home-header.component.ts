import { Component, OnInit, Input } from '@angular/core';
import { HeaderRoutes } from 'src/app/models';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @Input() links: HeaderRoutes[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
