import * as React from 'react'
import {
    // StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native'

import connectToStores from '../../utils/connectToStores'
import CommentStore from '../../stores/CommentStore'
// import HomeView from '../Home'

import * as s from './style.styl'

@connectToStores([CommentStore], () => ({
    comments: CommentStore.getState(),
}))
export default class HomeView extends React.Component<any, any> {
    constructor(props: any, context: any)
    {
        super(props, context)

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => true
            }).cloneWithRows(this.props.comments.toArray())
        }
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.comments.toArray())
        })
    }

    render() {
        return (
            <View style={{flex:1, padding:0}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }

    renderRow = rowData => {
        return (
            <View style={s.commentItem}>
                <Text>{rowData.comment}</Text>
            </View>
        )
    }
}