import configureStore from './configureStore';
import { initialBrowseState } from './ui/browse';
import { initialFlowState } from './ui/flow';
import { initialHomeState } from './ui/home';
import { initialNavState } from './ui/nav';
import { initialSessionState } from './session';
import { saveState, loadState } from './localStorage';

const initialState = loadState();

const store = configureStore(initialState);

store.subscribe(() => {
  const state = Object.assign({}, store.getState());
  state.session = initialSessionState;

  state.ui = {
    browse: initialBrowseState,
    home: initialHomeState,
    flow: initialFlowState,
    nav: initialNavState
  }

  saveState(store);
});

export default store;