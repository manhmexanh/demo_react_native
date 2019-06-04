import React from 'react'
import {createAppContainer} from 'react-navigation';
import {InitialNavigator} from './components/navigator/InitialNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store/index'

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}

export default App;