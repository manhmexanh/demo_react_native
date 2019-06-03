import React, {Component} from 'react'
import {
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native'
import {StyleHome} from '../styles/StyleHome';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        return (
            <View style={StyleHome.container}>
                <ScrollView>
                    <View style ={StyleHome.row}>
                    </View>
                    <View style ={StyleHome.row}>
                    </View>
                    <View style ={StyleHome.row}>
                    </View>
                    <View style ={StyleHome.row}>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
