import { compose, createStore } from 'redux';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


 const enhancer = composeEnhancers(applyMiddleware(thunk));

 const store = createStore(rootReducer, enhancer);

export default store