import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import User from '../User';

import users from '../../resolvers/users';

const Comment = new GraphQLObjectType({
  name: 'Comment',
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

export default Comment;
