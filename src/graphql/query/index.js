import { GraphQLObjectType, GraphQLString } from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    welcome: {
      type: GraphQLString,
      args: {
        name: {
          type: GraphQLString
        }
      },
      description: 'A sample welcome message.',
      resolve: (source, args, context, info) => {
        if (args && args.name) {
          return `Hello, ${args.name}!`;
        }

        return "Hello! What's your name?";
      }
    }
  }
});

export default QueryType;
