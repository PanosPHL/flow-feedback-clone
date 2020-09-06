import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './store/auth';
import HomePage from './components/HomePage';
import PageLoad from './components/PageLoad';
import FetchFlow from './components/FetchFlow';
import NewFlowPage from './components/NewFlowPage';
import EditFlowPage from './components/EditFlowPage';

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
      }, 800)
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
        <Route exact path='/flow/fetch'>
          <FetchFlow />
        </Route>
        <Route exact path='/flow/new'>
          <NewFlowPage />
        </Route>
        <Route path='/flow/:id(\d+)' >
          <EditFlowPage />
        </Route>
      </BrowserRouter>
    );
}

export default App;
