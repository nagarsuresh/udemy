import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-a',
  template: `
    <p>
      a Works!
    </p>
  `,
  styles: []
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
