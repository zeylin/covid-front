import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Case } from 'src/app/models';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  cases$: Observable<Case[]> = this.api.fetchDaily();
  cases: Case[];
  selectedCase: Case;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.cases$.subscribe((cases) => {
      this.cases = cases
    });
  }

  onSelectCase(data: Case) {
    this.selectedCase = data;
  }

}
