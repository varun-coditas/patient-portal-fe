import { Component, Input } from '@angular/core';
import { AvatarComponent } from '@coditashq/ng-ada-components';
import { TimeStampPipe } from '../../../pipe/time-stamp.pipe';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [AvatarComponent, TimeStampPipe],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent {
  @Input() type: 'user' | 'ai' = 'ai';
  @Input() message!: string;
  @Input() timeStamp!: number;

  convertTimeStampToDateString(timeStamp: number): Date {
    return new Date(timeStamp);
  }
}
