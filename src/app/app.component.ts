import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Session Code';
  greetingMessage: string;
  appName: string = 'Superman';

  handleOnGreetEvent(message: string): void {
    this.greetingMessage = message;
  }

}
