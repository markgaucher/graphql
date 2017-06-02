import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

import User from '../User';

import users from '../../resolvers/users';

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    },
    createdBy: {
      type: User,
      resolve: ({ userId }, args, context, info) => {
        return users.getOne(userId);
      }
    }
  })
});

export default Post;
