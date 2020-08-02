import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css'],
})
export class ToastsComponent implements OnInit {
  messages: Message[];
  message: Message;
  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService
      .getMessages()
      .subscribe((messages) => (this.messages = messages));
  }
}
