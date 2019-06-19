import { Component } from '@angular/core';

import { teas } from '../teas';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.css']
})
export class TeaListComponent {
  teas = teas;

  share() {
    window.alert('The tea has been shared!');
  }
}
