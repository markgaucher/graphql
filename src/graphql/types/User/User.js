import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import Post from '../Post';

import posts from '../../resolvers/posts';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A registered user of the site',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: (source, args, context, info) => {
        return posts.getAllByUser(source.id);
      }
    }
  })
});

export default User;
