import {createStackNavigator} from 'react-navigation';
import Home from '../homeComponent/Home';

export const HomeNavigator = createStackNavigator({
    Home: {
        screen:Home,
        navigationOptions:{
            title: "Home",
            headerLeft: null,
            headerTitleStyle: {
                fontWeight: 'normal',
                color:"#a9a9a9"
            },
        }
    },
});