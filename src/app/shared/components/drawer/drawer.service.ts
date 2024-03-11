import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { DrawerRef } from './drawer-ref';
export interface DrawerConfig {
  data?: any;
  width?: string;
}

export const DRAWER_DATA = new InjectionToken<any>('DRAWER_DATA');
@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>(component: ComponentType<T>, config?: DrawerConfig) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .right('0')
      .top('0');

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel-drawer',
      width: '50%',
      height: '100vh',
    });

    if (config && config.width) {
      overlayRef.updateSize({ width: config.width });
    }
    const drawerRef = new DrawerRef(overlayRef);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DrawerRef, useValue: drawerRef },
        { provide: DRAWER_DATA, useValue: config?.data },
      ],
    });

    const portal = new ComponentPortal(component, null, injector);
    const componentRef = overlayRef.attach(portal);
    overlayRef.addPanelClass('animate-drawer');
    return { drawerRef, componentRef };
  }
}
