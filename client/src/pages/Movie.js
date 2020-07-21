import React from 'react';
import List from '../components/List.js';
import { CardColumns, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import {GET_MOVIES} from '../query/Movie';

function Movie() {
  const { loading, error, data: movies } = useQuery(GET_MOVIES)

  if (loading) {
    return <p>Loading ....</p>
  }

  if (error) {
    return <p>Error ....</p>
  }

  return (
    <Container>
      <CardColumns>
        {movies.movies.map((movie) => {
          return (
            <List movie={movie} key={movie._id} isMovie={true} />
          )
        })}
      </CardColumns>
    </Container>
  )
}

export default Movie