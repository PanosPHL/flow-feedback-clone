import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './store/session';
import { setNotes } from './store/notes';
import { setCategories } from './store/categories';
import { setFlows } from './store/flows';
import { setUsers } from './store/users';
import { setVideos } from './store/videos';
import HomePage from './components/HomePage';
import PageLoad from './components/PageLoad';
import Main from './components/Main';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
        dispatch(setUser(res.data.user));
      }
    }
    loadUser();

    const loadAppData = async () => {
      const res = await fetch('/api/session/data');
      if (res.ok) {
        res.data = await res.json();
        console.log(res.data);
        dispatch(setCategories(res.data.categories));
        dispatch(setFlows(res.data.flows));
        dispatch(setNotes(res.data.notes));
        dispatch(setVideos(res.data.videos));
        dispatch(setUsers(res.data.users));
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    }

    loadAppData();
  }, [dispatch]);

  if (loading) return (
    <PageLoad />
  );

    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/' component={Main} />
      </Switch>
      </BrowserRouter>
    );
}

export default App;
