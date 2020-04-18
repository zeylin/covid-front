import { Component, OnInit, Input } from '@angular/core';
import { HeaderRoutes } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() links: HeaderRoutes[];

  constructor() { }

  ngOnInit(): void {
  }

}
