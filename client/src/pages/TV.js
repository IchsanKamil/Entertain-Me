import React from 'react';
import List from '../components/List.js';
import { CardColumns, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import GET_TVS from '../query/TV';

function TV() {
  const { loading, error, data: tvs } = useQuery(GET_TVS)

  if (loading) {
    return <p>Loading ....</p>
  }

  if (error) {
    return <p>Error ....</p>
  }

  return (
    <Container>
      <CardColumns>
        {tvs.tvs.map((movie) => {
          return (
            <List movie={movie} key={movie._id} />
          )
        })}
      </CardColumns>
    </Container>
  )
}

export default TV