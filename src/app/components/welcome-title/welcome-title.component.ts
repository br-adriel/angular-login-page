import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-title',
  templateUrl: './welcome-title.component.html',
  styleUrls: ['./welcome-title.component.css'],
})
export class WelcomeTitleComponent {
  @Input() public username: string = '';
}
