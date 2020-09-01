import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import PageLoad from './components/PageLoad';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import configureStore from './store/configureStore';

export const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
      }
      setTimeout(() => {
        setLoading(false);
      }, 1200)
    }
    loadUser();
  }, []);

  if (loading) return (
    <PageLoad />
  );

    return (
      <BrowserRouter>
      <Provider store={store}>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path="/login">
          <LogIn store={store}/>
        </Route>
        <Route path='/sign-up'>
          <SignUp store={store}/>
        </Route>
      </Provider>
      </BrowserRouter>
    );
}

export default App;
