import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: Message[] = [];

  constructor() {}

  remove(message: Message): void {
    this.messages = this.messages.filter((m) => m !== message);
  }

  add(title: string, message: string, type: string): void {
    const newMessage = new Message(title, message, type);
    switch (type) {
      case 'success':
        newMessage.classname = this.typeSuccess();
        break;
      case 'danger':
        newMessage.classname = this.typeDanger();
        break;
      default:
        newMessage.classname = '';
    }
    this.messages.push(newMessage);
  }

  private typeSuccess(): string {
    return 'bg-success text-light';
  }

  private typeDanger(): string {
    return 'bg-danger text-light';
  }
}
