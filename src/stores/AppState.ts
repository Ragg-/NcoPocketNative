import {Map} from 'immutable'
import {ReduceStore} from 'flux/utils'

import dispatcher from '../utils/dispatcher'
import {KnownPayloads} from '../actions/KnownPayloads'

export interface AppState {
    authenticated: boolean

    get<K extends keyof AppState>(key: K): AppState[K]
    set<K extends keyof AppState>(key: K, value: AppState[K]): AppState
}

class AppStateStore extends ReduceStore<AppState, KnownPayloads> {

    getInitialState(): AppState
    {
        return Map({
            authenticated: false,
        }) as any
    }

    reduce(state: AppState, payload: KnownPayloads)
    {
        switch (payload.type) {

        }

        return state
    }
}

export default new AppStateStore(dispatcher)