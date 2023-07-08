import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import wsMiddleware from './middleware/wsMiddleware';
import { wsOrdersActions } from './actions/wsAction';

const composeEnhancers =
  (typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, wsMiddleware( wsOrdersActions)))

const store = createStore(rootReducer, enhancer);

export default store