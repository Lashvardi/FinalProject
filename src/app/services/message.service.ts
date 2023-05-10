import { Injectable } from '@angular/core';
import { MessageInterface } from '../models/message';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private static RESOURCE_URL = 'Message/Messages';
  private static MESSAGE_URI = 'Message/Message';
  constructor(public http: HttpClient) { }

  GetMessages(phoneNumber: string){
    return this.http.get<MessageInterface[]>(ServiceUrlBuilder.buildRootUrl(MessageService.RESOURCE_URL + `?phoneNumber=${phoneNumber}`));
  }
  
  SendMessage(phoneNumber: string, carId: number) {
    return this.http.post(ServiceUrlBuilder.buildRootUrl(`${MessageService.MESSAGE_URI}`), null, {
      params: new HttpParams()
        .set('phoneNumber', phoneNumber)
        .set('carId', carId.toString())
    });
  }
}
