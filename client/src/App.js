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
import FormMovie from './pages/FormMovie'
import TV from './pages/TV'
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav className="justify-content-around mt-3" variant="pills" defaultActiveKey="/">
          <Link to={`/`}>
            Home
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
          <Route path='/movies/:id'>
            <MovieDetail />
          </Route>
          <Route path='/tv_series'>
            <TV />
          </Route>
          <Route path='/movies'>
            <Movie />
          </Route>
          <Route path='/addMovie'>
            <FormMovie />
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
