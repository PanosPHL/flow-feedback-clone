import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth, { RESET_STATE } from './auth';
import newFlow from './newFlow';
import categories from './categories';
import flows from './flows';
import notes from './notes';
import home from './ui/home';

const ui = combineReducers({
  home
});

const appReducer = combineReducers({
  auth,
  newFlow,
  categories,
  flows,
  notes,
  ui
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = {};
  }
  return appReducer(state, action);
}

let storeEnhancer;

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  storeEnhancer = applyMiddleware(thunk);
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    storeEnhancer
  )
}