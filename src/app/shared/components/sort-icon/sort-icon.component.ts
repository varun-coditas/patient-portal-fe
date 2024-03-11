import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  standalone: true,
  imports: [],
  templateUrl: './sort-icon.component.html',
  styleUrl: './sort-icon.component.scss',
})
export class SortIconComponent {
  @Output() sort = new EventEmitter<number>();
  sortValue = 1;
  toggle() {
    this.sortValue == 1 ? (this.sortValue = -1) : (this.sortValue = 1);
    this.sort.emit(this.sortValue);
  }
}
