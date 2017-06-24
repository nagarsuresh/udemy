import { LOAD_USER_THREADS_ACTION, LoadUserThreadsAction, MyAction } from './store/actions';
import { INITIAL_APPLICATION_STATE, ApplicationState } from './store/application-state';
import { ThreadsService } from './services/threads.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Action } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';


export function storeReducer(state: ApplicationState = INITIAL_APPLICATION_STATE, action: Action) {
  switch (action.type) {
    case LOAD_USER_THREADS_ACTION:
      return (<MyAction>action).process(state);
    default:
      return state;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(storeReducer)
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
