import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePipelinePopupComponent } from './create-pipeline-popup.component';

describe('CreatePipelinePopupComponent', () => {
  let component: CreatePipelinePopupComponent;
  let fixture: ComponentFixture<CreatePipelinePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePipelinePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePipelinePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
