import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notifications.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl : './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  newNotification;

  constructor(
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.newNotification = this.notificationService.getLatestUnread();
  }
}
