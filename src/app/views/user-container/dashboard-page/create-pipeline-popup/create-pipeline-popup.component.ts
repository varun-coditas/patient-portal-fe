import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ButtonComponent,
  DialogService,
  InputComponent,
} from '@coditashq/ng-ada-components';
import { PipelineService } from '../../services/pipeline.service';

@Component({
  selector: 'app-create-pipeline-popup',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './create-pipeline-popup.component.html',
  styleUrl: './create-pipeline-popup.component.scss',
})
export class CreatePipelinePopupComponent {
  pipelineName: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private pipelineService: PipelineService,
    private dialogService: DialogService,
    private router: Router
  ) { }

  create() {
    this.pipelineService.createPipeline(this.pipelineName).subscribe({
      next: (value: any) => {
        this.dialogService.close();
        this.router.navigateByUrl(`/pipeline-config/${value.id}`);
      },
      error(err) {
        console.log(err);
      },
    });
  }
  checkForLength() {
    if (this.pipelineName.length > 220) {
      this.pipelineName = this.pipelineName.slice(0, 220);
      this.cdr.detectChanges();
    }
  }
}
