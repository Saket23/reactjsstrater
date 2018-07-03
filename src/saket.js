import React,{Component} from 'react';
import App from './App';
import reducers from './Reducers';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';

class Saket extends Component{
    render (){
        const store = createStore(reducers);
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

export default Saket;