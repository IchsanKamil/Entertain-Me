import { gql } from '@apollo/client';

const GET_ALL = gql`
  query {
    movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
    tvs {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export default GET_ALL