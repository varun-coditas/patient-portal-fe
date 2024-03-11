import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@coditashq/ng-ada-components';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, InputComponent, FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
})
export class ChatInputComponent {
  @Output() sendClick = new EventEmitter<string>();
  @Input() isDisable = false
  message: string = '';
  setValue(event: string) {
    this.message = event;
  }
  onSendClick() {
    this.sendClick.emit(this.message);
    this.message = '';
  }
}
