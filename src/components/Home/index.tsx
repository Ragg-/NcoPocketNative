import * as React from 'react'
import {
    // StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native'

import connectToStores from '../../utils/connectToStores'
import AppStateStore from '../../stores/AppState'
import CommentsView from '../Comments'

// import * as s from './style.styl'

// @connectToStores([AppStateStore], () => ({
//     app: AppStateStore,
// }))

export default class HomeView extends React.Component<any, any> {
    render()
    {
        return (
            <CommentsView />
        )
    }
}

                // <Modal animationType='slide'>
                //     <View>
                //         {/*<Text> ✋( ͡° ͜ʖ ͡°)</Text>*/}
                //         <TextInput placeholder="email" />
                //     </View>
                // </Modal>