import { Component } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Club, Meeting } from './club';

import ClubJson from '../assets/club.json';
import moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  club = ClubJson as Club;

  public constructor(
    private titleService: Title,
    private sanitizer: DomSanitizer
  ) {
    this.setTitle(this.club.name);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public safeMapUrl(url?: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url || this.club.mapUrl);
  }

  public meetings(meetings?: Meeting[]): Date[] {
    return (meetings || this.club.meetings || [])
      .map(meeting => moment(meeting.date))
      .filter(date => date.isAfter(new Date()))
      .sort((a, b) => a.isAfter(b) ? 1 : -1)
      .map(date => date.toDate());
  }

  public friendlyDates(dates?: Date[]): string[] {
    return (dates || this.meetings())
      .map(meeting => moment(meeting).format('dddd MMMM D [at] h:ma'));
  }

  public nextMeeting(dates?: string[]): string {
    return (dates || this.friendlyDates() || [''])[0];
  }

}
