import { Injectable } from '@angular/core';
import { MessageInterface } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private static RESOURCE_URL = 'Message/Messages';
  constructor(public http: HttpClient) { }

  GetMessages(phonenumber: string){
    return this.http.get<MessageInterface[]>(ServiceUrlBuilder.buildRootUrl(MessageService.RESOURCE_URL+`?phoneNumber=${phonenumber}`));  }
}
