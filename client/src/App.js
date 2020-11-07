import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './store/auth';
import { setNotes } from './store/notes';
import { setCategories } from './store/categories';
import { setFlows } from './store/flows';
import { setUsers } from './store/users';
import { setVideos } from './store/videos';
import HomePage from './components/HomePage';
import PageLoad from './components/PageLoad';
import FetchFlow from './components/FetchFlow';
import NewFlowPage from './components/NewFlowPage';
import EditFlowPage from './components/EditFlowPage';
import BrowseFlows from './components/BrowseFlows';
import CatFlows from './components/CatFlows';
import NotFound from './components/NotFound';

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
        setLoading(false);
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
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/flow/fetch'>
          <FetchFlow />
        </Route>
        <Route exact path='/flow/new'>
          <NewFlowPage />
        </Route>
        <Route path='/flow/:id(\d+)' >
          <EditFlowPage />
        </Route>
        <Route exact path='/my-flows'>
          <BrowseFlows />
        </Route>
        <Route path='/category/:id(\d+)'>
          <CatFlows/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      </BrowserRouter>
    );
}

export default App;
