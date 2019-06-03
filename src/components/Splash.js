import React, {Component} from 'react'
import {
    Animated
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {ColorSplash, StyleSplash} from '../styles/StyleSplash';
import { StackActions } from 'react-navigation';

const replaceAction = StackActions.replace({
    routeName: 'Home',
});

export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.animatedValueIcon = new Animated.Value(0.5);
        this.animatedValueLoading = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.spring(this.animatedValueIcon, {
            toValue: 1,
            friction: 4,
            delay: 2500
        }).start();

        Animated.timing(this.animatedValueLoading, {
            toValue: 1,
            delay: 200,
            duration: 3000
        }).start(() => {
            this.props.navigation.dispatch(replaceAction);
        });
    }

    render() {
        return (
            <LinearGradient colors={ColorSplash} style={StyleSplash.container}>
                <Animated.View style={[StyleSplash.ring, {transform: [{scale: this.animatedValueIcon}]}]}>
                    <Animated.Image source={require('../assets/img/ic_sound_cloud.png')}
                                    style={[{resizeMode: 'contain', width: 200, height: 200}]}/>
                </Animated.View>
                <Animated.View style={[StyleSplash.line, {
                    transform: [{scale: this.animatedValueLoading}]
                }]}/>
            </LinearGradient>

        );
    }
}