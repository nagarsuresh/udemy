import { ThreadSummaryVm } from './../../src/app/thread-section/thread-summary.vm';
import { Thread } from './../model/thread';
import { ApplicationState } from './../../src/app/store/application-state';


import * as _ from 'lodash';

export function mapStateToUserName(state: ApplicationState): string {
    return state.storeData.participants[state.uiState.userId].name
}

export function mapStateToUnreadMessagesCounter(state: ApplicationState): number {
    const userId: number = state.uiState.userId;
    return _.values<Thread>(state.storeData.threads).reduce((acc, thread) => acc + thread.participants[userId], 0);
}

export function mapThreadToThreadSummary(state: ApplicationState, thread: Thread): ThreadSummaryVm {
    const names = _.keys(thread.participants).map(
        participantId => state.storeData.participants[participantId].name
    )
    const lastMessageId = _.last(thread.messageIds);
    const lastMessage = state.storeData.messages[lastMessageId];
    return {
        id: thread.id,
        lastMessageText: lastMessage.text,
        participantNames: _.join(names),
        timestamp: lastMessage.timestamp
    }
}


export function stateToThreadSummarySelector(state: ApplicationState): ThreadSummaryVm[] {
    const threads = _.values<Thread>(state.storeData.threads);
    return threads.map(_.partial(mapThreadToThreadSummary, state));
}


