import {List} from 'immutable'
import {ReduceStore} from 'flux/utils'
import dispatcher from '../utils/dispatcher'

import {KnownPayloads} from '../actions/KnownPayloads'

class CommentsStore extends ReduceStore<any, any> {
    getInitialState()
    {
        return List([
            {comment: '└(՞ةڼ◔)」ﾇﾍﾞｼﾞｮﾝﾇｼﾞｮｼﾞｮﾝﾍﾞﾙﾐｯﾃｨｽﾓｹﾞﾛﾝﾎﾞｮwwww'},
            {comment: '( ☝՞ਊ ՞)☝ｲﾋｨwwwww'},
        ])
    }

    reduce(state: List<{}>, payload: KnownPayloads)
    {
        return state.push({comment: '✌(´◓ｑ◔｀)✌'})
    }
}

export default new CommentsStore(dispatcher)