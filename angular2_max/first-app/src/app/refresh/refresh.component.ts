import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {

  constructor() { }

  list: string[] = [];

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list.push("Value " + i);
    }
  }

  onAddMore(): void{
    for (let i = 0; i < 2; i++) {
      this.list.push("Value " + this.list.length);
    }
  }

}
