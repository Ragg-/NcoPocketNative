import keymirror from '../utils/keymirror'
import Payload from '../utils/Payload'

import dispatcher from '../utils/dispatcher'

export type AppActionPayloads = Payload<'Authenticate', {}>

export const AppActionDispatches = keymirror({
    'Authenticated': null
})

export function authenticate(email: string, password: string)
{
    console.log('dispatch')
    dispatcher.dispatch(new Payload('test', {}))
}


setInterval(() => authenticate('', ''), 1000)