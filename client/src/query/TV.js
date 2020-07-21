import { gql } from '@apollo/client';

const GET_TVS = gql`
query {
  tvs {
    _id
    title
    overview
    popularity
    tags
  }
}
`

export default GET_TVS