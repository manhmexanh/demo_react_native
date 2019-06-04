import React from 'react'
import {createAppContainer} from 'react-navigation';
import {InitialNavigator} from './navigator/InitialNavigator';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/index'

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
    render() {
        return (
                <AppContainer/>
        );
    }
}

export default App;