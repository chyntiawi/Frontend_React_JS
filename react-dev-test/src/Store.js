import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { HomePageReducer } from './pages/HomePage/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const appReducer = combineReducers({
    HomePageReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

const Store = (initialState) =>
    createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default Store;
