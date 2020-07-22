import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_MOVIE } from '../query/Movie';
import { Container } from 'react-bootstrap';

export default () => {
  const { id } = useParams()
  const { loading, error, data: movie } = useQuery(GET_MOVIE, {
    variables: { movieId: id }
  })

  if (loading) {
    return <p>Loading ....</p>
  }

  if (error) {
    return <p>Error ....</p>
  }
  console.log(movie, '<<');
  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ background: `#96c7d5`, width: '18rem' }}>
        <Card.Img variant="top" src={movie.movie.poster_path} alt="poster movie" height="350" />
        <Card.Body>
          <Card.Title>{movie.movie.title}</Card.Title>
          <Card.Text>
            {movie.movie.overview}
          </Card.Text>
          <Card.Text>
            {movie.movie.popularity}
          </Card.Text>
          <Card.Text>
            {movie.movie.tags}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}