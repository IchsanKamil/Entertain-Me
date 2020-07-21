import React from 'react';
import List from '../components/List.js';
import { CardColumns, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import GET_ALL from '../query/MovieTV';

function Home() {
  const { loading, error, data } = useQuery(GET_ALL)

  if (loading) {
    return <p>Loading ....</p>
  }

  if (error) {
    return <p>Error ....</p>
  }

  return (
    <Container>
      <CardColumns>
        {data.movies.map((movie) => {
          return (
            <List movie={movie} key={movie._id} isMovie={true} />
          )
        })}
        {data.tvs.map((movie) => {
          return (
            <List movie={movie} key={movie._id} isMovie={false} />
          )
        })}
      </CardColumns>
    </Container>
  )
}

export default Home