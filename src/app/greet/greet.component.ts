import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  onGreetClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleGreet(): void {
    // this.onGreetClick.emit("Hello, " +  this.name + "!");
    this.onGreetClick.emit(`Hello, ${this.name}!`);
  }

}
