import {createSwitchNavigator} from 'react-navigation';
import Splash from '../Splash';
import {AppNavigator} from './AppNavigator';

export const InitialNavigator = createSwitchNavigator({
    Splash: Splash,
    App: AppNavigator
});