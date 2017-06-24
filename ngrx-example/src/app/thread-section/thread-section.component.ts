import { ThreadSummaryVm } from './thread-summary.vm';
import { Thread } from './../../../shared/model/thread';
import { Observable } from 'rxjs';
import { LoadUserThreadsAction } from './../store/actions';
import { ApplicationState } from './../store/application-state';
import { Store } from '@ngrx/store';
import { ThreadsService } from './../services/threads.service';
import { Component, OnInit } from '@angular/core';
import { mapStateToUserName, mapStateToUnreadMessagesCounter, stateToThreadSummarySelector } from './../../../shared/utils/util';
import * as _ from 'lodash';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVm[]>;


  constructor(private threadsService: ThreadsService, private store: Store<ApplicationState>) {
    this.userName$ = store.skip(1).map(mapStateToUserName);
    this.unreadMessagesCounter$ = store.skip(1).map(mapStateToUnreadMessagesCounter);
    this.threadSummaries$ = store.select(stateToThreadSummarySelector);
  }

  ngOnInit() {
    this.threadsService.loadUserThreads().subscribe(
      (allUserData => {
        this.store.dispatch(new LoadUserThreadsAction(allUserData))
      })
    );
  }

}
