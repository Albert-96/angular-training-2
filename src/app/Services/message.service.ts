import { Injectable } from '@angular/core';
import { Message } from '../Models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageList : Message[] = [
    new Message('Alert', 'Covid alert', 'danger'),
    new Message('Warning', 'Covid warning', 'warning'),
    new Message('Info', 'Covid info', 'info'),
  ];

  constructor() { }
}
