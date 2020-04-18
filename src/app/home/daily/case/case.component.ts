import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Case } from 'src/app/models';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent {

  @Input() case: Case;

  @Output() selected = new EventEmitter<void>();

  @HostListener('click')
  onHostClick() {
    this.selected.emit();
  }

}
