import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import { User } from '../User';

import users from '../../loaders/users';

const Comment = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    body: {
      type: GraphQLString
    },
    createdBy: {
      type: User,
      resolve: ({ userId }, args, context, info) => {
        return users.getOne(context.loaders.userLoader, userId);
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
