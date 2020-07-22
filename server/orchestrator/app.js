require('dotenv').config()
const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server')
const movieSchema = require('./schema/movieSchema');
const tvSchema = require('./schema/tvSchema')
const PORT = process.env.PORT

const typeDefs = gql`
  type Query
  type Mutation 
`

const schema = makeExecutableSchema({
  typeDefs : [
    typeDefs,
    movieSchema.typeDefs,
    tvSchema.typeDefs
  ],
  resolvers : [
    movieSchema.resolvers,
    tvSchema.resolvers
  ]
})

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({ typeDefs, resolvers });
const server = new ApolloServer({
  schema
})

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});