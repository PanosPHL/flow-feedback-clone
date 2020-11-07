import configureStore from './configureStore';
import { saveState, loadState } from './localStorage';

const initialState = loadState();

const store = configureStore(initialState);

store.subscribe(() => {
  const state = Object.assign({}, store.getState());
  state.session = {
    id: null,
    pausedCard: null
  }

  state.ui = {
    home: {
      loginModal: false,
      signUpModal: false
    },
    flow: {
      newNoteForm: false,
      editNoteForm: false
    }
  }

  saveState(store);
});

export default store;