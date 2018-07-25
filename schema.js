import {
  GraphQLString,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

// import fetch from 'node-fetch';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: '...',

  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: (person) => person.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: (person) => person.last_name,
    },
    email: { type: GraphQLString},
    username: { type: GraphQLString},
    id: { type: GraphQLString },
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    person: {
      type: PersonType,
      args: {
        id: { type: GraphQLString },
      },
      // there could be an ajax
      resolve: (root, args) => ({
        id: args.id,
        username: 'alice',
        first_name: 'Alice',
        last_name: 'Ts',
        email: 'alice@gmail.com'
      })
    }
  })
})


export default new GraphQLSchema({
  query: QueryType
});
