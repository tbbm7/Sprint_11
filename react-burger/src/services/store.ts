import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import wsMiddleware from './middleware/wsMiddleware';
import { wsOrdersUserActions, wsOrdersActions } from './actions/wsAction';

const WS_URL = "wss://norma.nomoreparties.space/orders";

const composeEnhancers =
  (typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, wsMiddleware(WS_URL, wsOrdersActions), wsMiddleware(WS_URL, wsOrdersUserActions)))

const store = createStore(rootReducer, enhancer);

export default store