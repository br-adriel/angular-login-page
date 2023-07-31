import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public typedUsername: string = '';

  updateTypedUsername(newUsername: string) {
    this.typedUsername = newUsername.trim();
  }
}
