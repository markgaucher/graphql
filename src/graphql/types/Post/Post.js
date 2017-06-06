import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import User from '../User';

import users from '../../resolvers/users';

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    body: {
      type: GraphQLString
    },
    createdBy: {
      type: User,
      resolve: ({ userId }, args, context, info) => {
        return users.getOne(userId);
      }
    },
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    }
  })
});

export default Post;
