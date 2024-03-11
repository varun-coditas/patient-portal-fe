import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePipelinePopupComponent } from './delete-pipeline-popup.component';

describe('DeletePipelinePopupComponent', () => {
  let component: DeletePipelinePopupComponent;
  let fixture: ComponentFixture<DeletePipelinePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePipelinePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePipelinePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
