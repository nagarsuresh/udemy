import { ThreadSummaryVm } from './../thread-section/thread-summary.vm';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

  @Input('threads') threads:ThreadSummaryVm[];
  constructor() { }

  ngOnInit() {
  }

}
