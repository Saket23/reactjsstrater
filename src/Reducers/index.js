import {combineReducers} from 'redux';

import changedData from './reducer';

const rootReducer = combineReducers({
    changeData:changedData
});

export default rootReducer;