import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizeErrorPopupComponent } from './file-size-error-popup.component';

describe('FileSizeErrorPopupComponent', () => {
  let component: FileSizeErrorPopupComponent;
  let fixture: ComponentFixture<FileSizeErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileSizeErrorPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileSizeErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
