import { gql } from '@apollo/client';

const GET_MOVIES = gql`
  query {
    movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

const GET_MOVIE = gql `
  query ($movieId: ID) {
    movie(_id: $movieId) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

const ADD_MOVIE = gql `
  mutation ($newMovie: MovieInput) {
    addMovie(movie: $newMovie) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

const DELETE_MOVIE = gql `
  query ($movieId: ID) {
    deleteMovie(_id: $movieId) {
      message
    }
  }
`

export { GET_MOVIES, GET_MOVIE, ADD_MOVIE, DELETE_MOVIE }