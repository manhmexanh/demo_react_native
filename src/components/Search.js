import React, {Component} from 'react'
import {
    View,
} from 'react-native'
import {StyleSearch} from '../styles/StyleSearch';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }
    render() {
        return (
            <View style={StyleSearch.container}>
            </View>
        )
    }
}
