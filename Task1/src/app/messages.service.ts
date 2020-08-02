import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: Message[];

  constructor() {}

  newMessage(title: string, message: string, type: string): void {
    const newMessage = new Message(title, message, type);
    this.messages.push(newMessage);
  }

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }
}
