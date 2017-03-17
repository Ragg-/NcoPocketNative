import {Dispatcher} from 'flux'
import {KnownPayloads} from '../actions/KnownPayloads'

export default new Dispatcher<KnownPayloads>()