import React, {Component} from 'react'
import {createStackNavigator, createAppContainer,createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import Home from './Home';
import Splash from './Splash';
import { Icon } from 'react-native-elements'
import Stream from './Stream';
import Search from './Search';
import Library from './Library';
import More from './More';

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Stream: {
            screen: Stream,
            navigationOptions: {
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="rowing" size={horizontal ? 20 : 25} color={tintColor} />
            },
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="search" size={horizontal ? 20 : 25} color={tintColor} />
            },
        },
        Library: {
            screen: Library,
            navigationOptions: {
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="book" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        More: {
            screen: More,
            navigationOptions: {
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="menu" size={horizontal ? 20 : 25} color={tintColor} />
            }
        }
    },{
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'gray'
        }
    }
);

const InitialNavigator = createSwitchNavigator({
    Splash: Splash,
    App: AppNavigator
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
    render() {
        return (
                <AppContainer />
        );
    }
}

export default App;