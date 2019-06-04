import React, {Component} from 'react'
import {
    View,
} from 'react-native'
import {StyleLibrary} from '../styles/StyleLibrary';

export default class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }
    render() {
        return (
            <View style={StyleLibrary.container}>
            </View>
        )
    }
}
