import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { authentication } from '../reducers/authentication.reducers';
import { alert } from '../reducers/alert.reducers';

const rootReducer = combineReducers({
    authentication,
    alert,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));