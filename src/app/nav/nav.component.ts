import {Component} from '@angular/core';
import ClubJson from '../../assets/club.json';
import {Club, Meeting} from '../club';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent {
  collapsed = true;
  club = ClubJson as Club;
}
