import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'src/app/models/message';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  message: Message = this.getDefaultValue();

  constructor(
    private notificationsService: NotificationsService,
    private snackbarService: MatSnackBar,
  ) {}

  getDefaultValue(): Message {
    return {
      message: '',
      title: '',
      contact: '',
    };
  }

  submit(): void {
    const canSend = this.message.title.length !== 0 || this.message.contact.length !== 0 || this.message.title.length !== 0;
    
    if (canSend) {
      this.notificationsService.sendNotification(this.message)
        .subscribe({
          next: () => {
            this.snackbarService.open('Done', 'OK', {duration: 3000});
            this.message = this.getDefaultValue();
          },
          error: () => this.snackbarService.open('Not sent, try again later', 'OK', {duration: 3000}),
        });
      return;
    }

    this.snackbarService.open('Cannot send, field not filled');
  }
}
