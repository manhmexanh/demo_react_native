import {createBottomTabNavigator} from "react-navigation";
import React from 'react'
import {Icon} from 'react-native-elements';
import Stream from '../Stream';
import Search from '../Search';
import Library from '../Library';
import More from '../More';
import {HomeNavigator} from './HomeNavigator';

export const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
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
            activeBackgroundColor: 'black',
            inactiveBackgroundColor : 'black',
            activeTintColor: 'orange',
            inactiveTintColor: 'gray'
        }
    }
);