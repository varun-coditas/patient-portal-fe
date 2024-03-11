import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePipelinePopupComponent } from './save-pipeline-popup.component';

describe('SavePipelinePopupComponent', () => {
  let component: SavePipelinePopupComponent;
  let fixture: ComponentFixture<SavePipelinePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePipelinePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavePipelinePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
