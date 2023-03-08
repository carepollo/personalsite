import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // http://localhost:5000
  private readonly serverPath = 'http://seuetestings.eastus.cloudapp.azure.com';

  constructor(private http: HttpClient) {
    this.http.get<{ip:string}>('https://api.ipify.org/?format=json').subscribe(res => {
      this.sendNotification({message: 'from personal site', title: 'New visitor', contact: res.ip}).subscribe();
    });
  }

  sendNotification(notification: Message) {
    return this.http.post<Message>(`${this.serverPath}/notify`, notification);
  }
}
