import { CommonModule } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { AccordionComponent, ButtonComponent } from '@coditashq/ng-ada-components';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  standalone: true,
  imports: [CommonModule, AccordionComponent, CdkStepperModule, ButtonComponent],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StepperComponent extends CdkStepper implements OnInit {

  constructor(
    _dir: Directionality,
    _changeDetectorRef: ChangeDetectorRef,
    _elementRef: ElementRef
  ) {
    super(_dir, _changeDetectorRef, _elementRef);
  }

  ngOnInit(): void {
    this.orientation = 'vertical';
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
