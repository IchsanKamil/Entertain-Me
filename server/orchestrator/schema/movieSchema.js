const { gql } = require('apollo-server')
const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

const typeDefs = gql `
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  extend type Query {
    movies: [Movie]
    movie(_id: ID): Movie
  }

  input MovieInput {
    title: String!,
    overview: String!,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }

  type MovieMessage {
    message: String
  }

  extend type Mutation {
    addMovie( movie: MovieInput ) : Movie
    updateMovie(_id: ID, movie: MovieInput) : Movie
    deleteMovie(_id: ID) : MovieMessage
  }
`

const urlMovie = process.env.MOVIES_SERVICES_PATH

const resolvers = {
  Query: {
    movies: async () => {
      const movies = await redis.get('movies')

      if (movies) {
        return JSON.parse(movies)
      } else {
        const { data } = await axios.get(urlMovie)

        redis.set('movies', JSON.stringify(data))
        return data
      }
    },
    movie: function (parent, args, context, info) {
      const { _id } = args

      return axios({
        method: 'get',
        url: `${urlMovie}/${_id}`
      })
        .then(({ data }) => {
          return data
        }).catch((err) => {
          console.log(err);
        });
    }
  },
  Mutation: {
    addMovie: (_, args) => {
      const { title, overview, poster_path, popularity, tags } = args.movie

      return axios({
        method: 'post',
        url: urlMovie,
        data: {
          title, overview, poster_path, popularity, tags
        }
      })
        .then(({ data }) => {
          redis.del('movies')
          return data
        }).catch((err) => {
          console.log(err)
        });
    },
    updateMovie: (_, args) => {
      const { _id } = args
      const { title, overview, poster_path, popularity, tags } = args.movie

      return axios({
        method: 'put',
        url: `${urlMovie}/${_id}`,
        data: {
          title, overview, poster_path, popularity, tags
        }
      })
        .then(({data}) => {
          redis.del('movies')
          return data
        }).catch((err) => {
          console.log(err)
        });
    },
    deleteMovie: (_, args) => {
      const { _id } = args

      return axios({
        method: 'delete',
        url: `${urlMovie}/${_id}`,
      })
        .then(() => {
          redis.del('movies')
          return {
            message: "Movie successfully deleted"
          }
        }).catch((err) => {
          console.log(err)
        });
    }
  }
}

module.exports = { typeDefs, resolvers }