import { Component, OnInit } from '@angular/core';
import { Message } from '../Models/message.model';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [MessageService]
})
export class MessageListComponent implements OnInit {

  messageList : Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageList = this.messageService.messageList;
  }

}
