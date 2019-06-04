import React, {Component} from 'react'
import {
    View,
} from 'react-native'
import {StyleMore} from '../styles/StyleMore';

export default class More extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }
    render() {
        return (
            <View style={StyleMore.container}>
            </View>
        )
    }
}
