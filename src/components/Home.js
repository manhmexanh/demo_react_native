import React, {Component} from 'react'
import {
    View,
} from 'react-native'
import {StyleHome} from '../styles/StyleHome';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }
    render() {
        return (
            <View style={StyleHome.container}>
            </View>
        )
    }
}
