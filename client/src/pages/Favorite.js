import React from 'react';
import List from '../components/List.js';
import { CardColumns, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import {GET_FAVORITE} from '../query/MovieTV';

export default () => {
  const { loading, error, data } = useQuery(GET_FAVORITE)

  if (loading) {
    return <p>Loading ....</p>
  }

  if (error) {
    return <p>Error ....</p>
  }
  
  return (
    <Container>
      <CardColumns>
        {data.favorites.map((movie) => {
          return (
            <List movie={movie} key={movie._id} isMovie={false}/>
          )
        })}
      </CardColumns>
    </Container>
  )
}