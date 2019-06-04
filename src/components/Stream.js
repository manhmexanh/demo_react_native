import React, {Component} from 'react'
import {
    View,
} from 'react-native'
import {StyleStream} from '../styles/StyleStream';

export default class Stream extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    render() {
        return (
            <View style={StyleStream.container}>
            </View>
        )
    }
}