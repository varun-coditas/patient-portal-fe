import { ComponentType, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface PopOverConfig {
  originX?: 'start' | 'center' | 'end';
  originY?: 'center' | 'bottom' | 'top';
  overlayX?: 'start' | 'center' | 'end';
  overlayY?: 'center' | 'bottom' | 'top';
  offsetY?: number;
  offsetX?: number;
}
@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  private overlayRef!: OverlayRef | undefined;
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();
  constructor(private overlay: Overlay) {}
  showPopover<T>(
    origin: HTMLElement,
    template: ComponentType<T>,
    config?: PopOverConfig
  ) {
    if (!this.overlayRef) {
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(origin)
        .withPositions([
          {
            originX: config?.originX ?? 'start',
            originY: config?.originY ?? 'bottom',
            overlayX: config?.overlayX ?? 'start',
            overlayY: config?.overlayY ?? 'top',
            offsetY: config?.offsetY ?? 4,
            offsetX: config?.offsetX ?? 0,
          },
        ]);

      this.overlayRef = this.overlay.create({
        positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.block(),
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
      });
      this.overlayRef.backdropClick().subscribe(() => this.hidePopOver());
    }
    const portal = new ComponentPortal(template);
    const componentRef = this.overlayRef.attach(portal);
    this.isOpenSubject.next(true);
    return componentRef;
  }

  hidePopOver() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.dispose();
      this.overlayRef = undefined;
      this.isOpenSubject.next(false);
    }
  }
}
