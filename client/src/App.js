import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/client';
import client from './config/graphql';
import Home from './pages/Home'
import Movie from './pages/Movie'
import TV from './pages/TV'
import AddMovie from './pages/AddMovie'
import EditMovie from './pages/EditMovie';
import Favorite from './pages/Favorite';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav className="justify-content-around mt-3" variant="pills" defaultActiveKey="/">
          <Link to={`/`}>
            Home
          </Link>
          <Link to={`/favorites`}>
            Favorite
          </Link>
          <Link to={`/movies`}>
            Movies
          </Link>
          <Link to={`/addMovie`}>
            Add Movie
          </Link>
          <Link to={`/tv_series`}>
            TV Series
          </Link>
        </Nav>
        <h1 className="display-1 text-center my-3">EntertaintMe</h1>
        <Switch>
          <Route path='/movies/edit/:id'>
            <EditMovie />
          </Route>
          <Route path='/movies/:id'>
            <MovieDetail />
          </Route>
          <Route path='/favorites'>
            <Favorite />
          </Route>
          <Route path='/tv_series'>
            <TV />
          </Route>
          <Route path='/movies'>
            <Movie />
          </Route>
          <Route path='/addMovie'>
            <AddMovie />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
