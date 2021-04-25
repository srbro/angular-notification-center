import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../services/notifications.service";

@Component({
  selector: 'app-notifications',
  styleUrls: ['./notifications.component.scss'],
  templateUrl : './notifications.component.html'
})
export class NotificationsComponent implements OnInit{
  allNotifications;

  constructor(
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.allNotifications = this.notificationService.getAllNotifications();
  }
}
