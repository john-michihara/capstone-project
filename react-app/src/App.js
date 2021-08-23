import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { authenticate } from "./store/session";
import CreateDeckForm from "./components/CreateDeckForm";
import Deck from "./components/Deck";
import Flashcards from "./components/Flashcards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginForm from "./components/Authentication/LoginForm";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import ProfileSettings from "./components/ProfileSettings";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import Search from "./components/Search";
import SignUpForm from "./components/Authentication/SignUpForm";
import Splash from "./components/Splash";
import UpdateDeckForm from "./components/UpdateDeckForm";
import User from "./components/User";
import UsersList from "./components/UsersList";

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
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true}>
          <Home />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/:username" exact={true}>
          <Profile />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/settings/:username" exact={true}>
          <ProfileSettings />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/create-deck" exact={true}>
          <CreateDeckForm />
        </ProtectedRoute>
        <ProtectedRoute path="/decks/:deckId/edit" exact={true}>
          <UpdateDeckForm />
        </ProtectedRoute>
        <ProtectedRoute path="/decks/:deckId/flashcards" exact={true}>
          <Flashcards />
        </ProtectedRoute>
        <ProtectedRoute path="/decks/:deckId" exact={true}>
          <Deck />
        </ProtectedRoute>
        <ProtectedRoute path="/search/:keyword" exact={true}>
          <Search />
          <Footer />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
