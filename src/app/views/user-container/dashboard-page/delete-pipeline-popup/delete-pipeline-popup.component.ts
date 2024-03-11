import { Component, OnInit } from '@angular/core';
import { IPipelineTableData } from '../../interface/pipeline-history';
import { PipelineService } from '../../services/pipeline.service';

@Component({
  selector: 'app-delete-pipeline-popup',
  standalone: true,
  imports: [],
  templateUrl: './delete-pipeline-popup.component.html',
  styleUrl: './delete-pipeline-popup.component.scss',
})
export class DeletePipelinePopupComponent implements OnInit {
  pipelineData!: IPipelineTableData;
  constructor(private pipelineService: PipelineService) {}
  ngOnInit(): void {
    this.setPipelineData();
  }
  setPipelineData() {
    this.pipelineService.getPipelineTableRow().subscribe((res) => {
      if (res) {
        this.pipelineData = res;
      }
    });
  }
}
