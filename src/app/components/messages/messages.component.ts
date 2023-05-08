import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageInterface } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages: MessageInterface[] = [];


  constructor(private http: HttpClient,private messageService: MessageService){
    messageService.GetMessages(localStorage.getItem("PhoneNumber") || "591299899").subscribe((data: MessageInterface[])=>{
      this.messages = data;
      console.log(this.messages);
    })
  }

}
