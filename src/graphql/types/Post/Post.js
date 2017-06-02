import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import User from '../User';

import users from '../../../database/mock/users';

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    createdBy: {
      type: User,
      resolve: ({ userId }, args, context, info) => {
        return users.find(user => user.id === userId);
      }
    }
  }
});

export default Post;
