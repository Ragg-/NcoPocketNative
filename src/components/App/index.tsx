import * as React from 'react'
import {
    // StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    NavigatorIOS,
    TabBarIOS,
    Route,
} from 'react-native'

import connectToStores from '../../utils/connectToStores'

import * as AppActions from '../../actions/AppActions'
import AppStateStore from '../../stores/AppState'
import HomeView from '../Home'
import FontAwesome from 'react-native-fontawesome'

console.log(FontAwesome)

import * as s from './style.styl'

AppActions.authenticate('', '')

@connectToStores([AppStateStore], () => ({
    app: AppStateStore,
}))
export default class NcoPocket extends React.Component<any, any> {
    render() {
        return (
            <View style={{flex: 1}}>
                <NavigatorIOS
                    initialRoute={{
                        component: HomeView,
                        title: 'nco',
                    }}
                    renderScene={this.renderScene}
                    barTintColor="#0dccf2"
                    titleTextColor="#fff"
                    style={s.navigator}
                />
                <TabBarIOS>
                    <TabBarIOS.Item
                        icon={<FontAwesome>thLarge</FontAwesome>}
                        title='いいじゃん(˘ω˘ )'
                    />
                </TabBarIOS>
            </View>
        )
    }

    renderScene = (route: Route, navigator: Navigator) => {
        return <route.component />
    }
}