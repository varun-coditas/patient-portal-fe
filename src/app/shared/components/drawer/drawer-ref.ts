import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export class DrawerRef {
  private afterClosedSubject = new Subject<any>();
  constructor(private overlayRef: OverlayRef) {}

  public close(data?: any) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(data);
    this.afterClosedSubject.complete();
  }

  public afterClosed(): Observable<any> {
    return this.afterClosedSubject.asObservable();
  }
}
