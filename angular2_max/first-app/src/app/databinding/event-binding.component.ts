import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  clickedAt: Date;

  onButtonClick(): void {
    this.clickedAt = new Date();
    this.clicked.emit("Clicked the button at " + this.clickedAt);
  }

  ngOnInit() {
  }

}
