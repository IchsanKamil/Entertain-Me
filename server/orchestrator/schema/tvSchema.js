const { gql } = require('apollo-server')
const axios = require('axios')
// const Redis = require('ioredis')
// const redis = new Redis()

const typeDefs = gql`
  type TV {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  extend type Query {
    tvs: [TV]
    tv(_id: ID): TV
  }

  input TVInput {
    title: String!,
    overview: String!,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }

  type TVMessage {
    message: String
  }

  extend type Mutation {
    addTV( tv: TVInput ) : TV
    updateTV(_id: ID, tv: TVInput) : TV
    deleteTV(_id: ID) : TVMessage
  }
`

const urlTV = process.env.TV_SERIES_SERVICES_PATH

const resolvers = {
  Query: {
    tvs: async () => {
      // const tvs = await redis.get('tvs')

      // if (tvs) {
      //   return JSON.parse(tvs)
      // } else {
      // }
      return await axios({
        method: 'get',
        url: urlTV
      })
        .then(({ data }) => {
          // redis.set('tvs', JSON.stringify(data))
          return data
        }).catch((err) => {
          console.log(err);
        });
    },
    tv: function (parent, args, context, info) {
      const { _id } = args

      return axios({
        method: 'get',
        url: `${urlTV}/${_id}`
      })
        .then(({ data }) => {
          return data
        }).catch((err) => {
          console.log(err);
        });
    }
  },
  Mutation: {
    addTV: (_, args) => {
      const { title, overview, poster_path, popularity, tags } = args.tv

      return axios({
        method: 'post',
        url: urlTV,
        data: {
          title, overview, poster_path, popularity, tags
        }
      })
        .then(({ data }) => {
          // redis.del('tvs')
          return data
        }).catch((err) => {
          console.log(err)
        });
    },
    updateTV: (_, args) => {
      const { _id } = args
      const { title, overview, poster_path, popularity, tags } = args.tv

      return axios({
        method: 'put',
        url: `${urlTV}/${_id}`,
        data: {
          title, overview, poster_path, popularity, tags
        }
      })
        .then(({ data }) => {
          // redis.del('tvs')
          return data
        }).catch((err) => {
          console.log(err)
        });
    },
    deleteTV: (_, args) => {
      const { _id } = args

      return axios({
        method: 'delete',
        url: `${urlTV}/${_id}`,
      })
        .then(() => {
          // redis.del('tvs')
          return {
            message: "TV Series successfully deleted"
          }
        }).catch((err) => {
          console.log(err)
        });
    }
  }
}

module.exports = { typeDefs, resolvers }