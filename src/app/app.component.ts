import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _router: Router,
  ) {}

  title = 'Angular Session Code';
  greetingMessage: string;
  appName: string = 'Superman';
  showElement: boolean = true;
  elementName: string = 'div';
  currentDate: Date = new Date();

  numbers: number[] = [1, 2, 3, 4, 5];
  months: string[] = ['January', 'February', 'March', 'April', 'May'];
  customers = [
    {name: 'Batman', address: 'Gotham'},
    {name: 'Wonder Woman', address: 'Them...'},
    {name: 'Superman', address: 'Metrop...'},
  ];

  handleOnGreetEvent(message: string): void {
    this.greetingMessage = message;
  }

  navigateTo(targetPath: string): void {
    this._router.navigate([targetPath]);
  }

  addRemoveElement(condition: boolean): void {
    this.showElement = condition;
  }

}
