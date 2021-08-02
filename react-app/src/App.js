import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/Authentication/LoginForm';
import SignUpForm from './components/Authentication/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Decks from './components/Decks';
import Profile from './components/Profile';
import CreateDeckForm from './components/CreateDeckForm';
import UpdateDeckForm from './components/UpdateDeckForm';
import Deck from './components/Deck';
import Splash from './components/Splash';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
          <Splash />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <h1>My Home Page</h1>
          <Decks />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/:username' exact={true} >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/create-deck' exact={true} >
          <CreateDeckForm />
        </ProtectedRoute>
        <ProtectedRoute path='/decks/:deckId/edit' exact={true} >
          <UpdateDeckForm />
        </ProtectedRoute>
        <ProtectedRoute path='/decks/:deckId' exact={true} >
          <Deck />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
