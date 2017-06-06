import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import Comment from '../Comment';
import User from '../User';

import comments from '../../resolvers/comments';
import users from '../../resolvers/users';

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    body: {
      type: GraphQLString
    },
    comments: {
      type: new GraphQLList(Comment),
      resolve: ({ id }, args, context, info) => {
        return comments.getAllByPost(id);
      }
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
