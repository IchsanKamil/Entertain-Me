import React from 'react';
import { Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import { useMutation } from '@apollo/client';
import { DELETE_MOVIE, GET_MOVIES } from '../query/Movie';
import { favorites } from '../config/graphql';

export default props => {
  const [deleteMovie, { data }] = useMutation(DELETE_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }],
  });

  const onDelete = (id) => {
    deleteMovie({
      variables: { movieId: id, },
    });
  };

  const addFavorite = (newFavorite) => {
    let currentFavorites = favorites()
    favorites([...currentFavorites, newFavorite])
  }

  return (
    <>
      <Card style={{ background: `#96c7d5` }}>
        <Card.Img variant="top" src={props.movie.poster_path} alt="poster movie" height="390" />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>
            {props.movie.overview}
          </Card.Text>
          <Card.Text>
            {props.movie.popularity}
          </Card.Text>
          <Card.Text>
            {props.movie.tags}
          </Card.Text>
        </Card.Body>

        {props.isMovie && 
        <Card.Footer>
          <Link to={`/movies/${props.movie._id}`}>
            <button className="btn btn-primary mr-2">Detail</button>
          </Link >
          <Link to={`/movies/edit/${props.movie._id}`}>
            <button className="btn btn-warning mr-2">Edit</button>
          </Link >
          <button className="btn btn-danger mr-2" onClick={() => onDelete(props.movie._id)}>Delete</button>
          {/* {!props.isFavorite && */}
          <button className="btn btn-success" onClick={() => addFavorite(props.movie)}>Favorite</button>
          {/* } */}
        </Card.Footer>
        }
      </Card>
    </>
  )
}