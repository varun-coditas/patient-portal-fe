import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';

@Component({
  selector: 'app-upload-template',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './upload-template.component.html',
  styleUrl: './upload-template.component.scss',
})
export class UploadTemplateComponent {
  @Input() status: 'complete' | 'uploading' | 'error' = 'complete';
  @Input() fileName!: string;
  @Input() fileSize!: string | number;
  @Output() delete = new EventEmitter();
  onDeleteClick() {
    this.delete.emit();
  }
  getFilesize(): string {
    const fileSizeInMb = (Number(this.fileSize) / (1024 * 1024));
    const sizeForParam = fileSizeInMb >= 1 ?
      `${fileSizeInMb.toFixed(2)} MB` :
      `${(Number(this.fileSize) / 1024).toFixed(2)} KB`;
    return sizeForParam;
  }
}
