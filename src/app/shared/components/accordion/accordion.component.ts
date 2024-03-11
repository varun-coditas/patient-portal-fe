import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() accordionTitle: string = "Default title";
  @Input() accordionIcon: string = "";
  @Input() showRightIcon: boolean = true;
  @Output() accordionClicked: EventEmitter<any> = new EventEmitter();
  expanded: boolean = false;

  toggleAccordion(event: any) {
    this.expanded = !this.expanded;
    this.accordionClicked.emit({ isExpanded: this.expanded, event: event });
  }
} 