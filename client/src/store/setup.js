import configureStore from './configureStore';
import { saveState, loadState } from './localStorage';

const initialState = loadState();

const store = configureStore(initialState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;