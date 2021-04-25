// @ts-ignore
import * as data from '../data/notifications.json';
import {Injectable} from '@angular/core';
import { sortByAscDate } from './utils.service';

const notificationList = (data as any).default.notifications;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  sortByAscDate = sortByAscDate;

  getAllNotifications() {
    return this.sortByAscDate(notificationList);
  }

  getLatestUnread() {
    const sortedNotifications = this.sortByAscDate(notificationList);

    for(let i = 0; i < sortedNotifications.length; i ++) {
      if (sortedNotifications[i].active) {
        return sortedNotifications[i];
      }
    }
  }
}
