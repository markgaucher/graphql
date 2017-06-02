import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A registered user of the site',
  fields: {
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  }
});

export default User;
