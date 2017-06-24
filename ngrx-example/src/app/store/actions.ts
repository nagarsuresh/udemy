import * as _ from 'lodash';
import { ApplicationState } from './application-state';
import { AllUserData } from './../../../shared/to/all-user-data';
import { Action } from '@ngrx/store';

export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';

export interface MyAction extends Action {
    process(oldState: ApplicationState): ApplicationState;
}


export class LoadUserThreadsAction implements MyAction {
    readonly type = 'LOAD_USER_THREADS_ACTION';
    constructor(public payload: AllUserData) {
    }

    process(oldState: ApplicationState): ApplicationState{
        const newState: ApplicationState = Object.assign({}, oldState);
        newState.storeData = {
            participants: _.keyBy(this.payload.participants, 'id'),
            messages: _.keyBy(this.payload.messages, 'id'),
            threads : _.keyBy(this.payload.threads, 'id'),
        }
        return newState;
    }
}