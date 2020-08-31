import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import PageLoad from './components/PageLoad';
import LogIn from './components/LogIn';

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
      }, 1000)
    }
    loadUser();
  }, []);

  if (loading) return (
    <PageLoad />
  );

    return (
      <BrowserRouter>
        <Route path="/">
          <LogIn />
        </Route>
      </BrowserRouter>
    );
}

export default App;
