import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './store/auth';
import HomePage from './components/HomePage';
import PageLoad from './components/PageLoad';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
        dispatch(setUser(res.data.user));
      }
      setTimeout(() => {
        setLoading(false);
      }, 1200)
    }
    loadUser();
  }, [dispatch]);

  if (loading) return (
    <PageLoad />
  );

    return (
      <BrowserRouter>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
      </BrowserRouter>
    );
}

export default App;
