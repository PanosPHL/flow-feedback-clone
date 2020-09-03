import configureStore from './configureStore';
import { saveState, loadState } from './localStorage';

const initialState = loadState();

// Loading initial categories
if (initialState) {
  (async () => {
    const res = await fetch('/api/categories');
    const data = await res.json();
    initialState.categories = data.categories;
  })();
}

const store = configureStore(initialState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;