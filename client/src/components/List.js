import React from 'react';
import { Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

export default props => {
  return (
    <>
      <Card style={{ background: `#96c7d5` }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="poster movie" height="300" />
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
          <Link to={`/movies/${props.movie._id}`}>
            <button className="btn btn-danger mr-2">Delete</button>
          </Link >
          {/* <button className="btn btn-success" onClick={addFavorite}>Add to favorite</button> */}
          <button className="btn btn-success">Favorite</button>
        </Card.Footer>
        }
      </Card>
    </>
  )
}