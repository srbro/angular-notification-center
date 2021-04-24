// @ts-ignore
import * as data from '../data/notifications.json';
import {Injectable} from '@angular/core';
import { sortByAscDate } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  sortByAscDate = sortByAscDate;

  getAllNotifications() {
    return this.sortByAscDate(data.default.notifications);
  }

  getLatestUnread() {
    const sortedNotifications = this.sortByAscDate(data.default.notifications);

    for(let i = 0; i < sortedNotifications.length; i ++) {
      if (sortedNotifications[i].active) {
        return sortedNotifications[i];
      }
    }
  }
}
