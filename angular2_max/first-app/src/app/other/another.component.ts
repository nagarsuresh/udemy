import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <p>
      <ng-content></ng-content>  
    </p>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
