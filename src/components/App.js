import React, {Component} from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Splash from './Splash';
import {StyleHeaderApp} from '../styles/StyleApp';

const MainNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            headerTitleStyle: StyleHeaderApp,
            headerLeft: null,
            gesturesEnabled: false,
        }
    },
});

const App = createAppContainer(MainNavigator);

export default App