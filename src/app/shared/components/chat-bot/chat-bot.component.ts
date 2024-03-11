import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [ChatInputComponent, ChatMessageComponent],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss',
})
export class ChatBotComponent implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @Output() backClick = new EventEmitter();
  @Output() send = new EventEmitter<string>();
  @Input() pipelineName!: string;
  @Input() isLoading: boolean = false;
  @Input() chats: {
    message: string;
    type: 'user' | 'ai';
    timeStamp: number;
  }[] = [];
  onBackClick() {
    this.backClick.emit();
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  onSendClick(event: string) {
    this.send.emit(event);
  }
  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
