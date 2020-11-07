import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import session, { RESET_STATE } from './session';
import newFlow from './newFlow';
import categories from './categories';
import flows from './flows';
import notes from './notes';
import users from './users';
import videos from './videos';
import home from './ui/home';
import flow from './ui/flow';
import nav from './ui/nav';

const ui = combineReducers({
  home,
  flow,
  nav
});

const entities = combineReducers({
  categories,
  flows,
  notes,
  users,
  videos
});

const appReducer = combineReducers({
  session,
  newFlow,
  entities,
  ui
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    const newState = Object.assign({}, state)
    newState.session.id = null;
    return newState;
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