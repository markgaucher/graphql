import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';

import Comment from '../types/Comment';
import Post from '../types/Post';
import User from '../types/User';

import comments from '../loaders/comments';
import posts from '../loaders/posts';
import users from '../loaders/users';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    comments: {
      type: new GraphQLList(Comment),
      description: 'A list of comments',
      resolve: (source, args, context, info) => {
        return comments.getAll();
      }
    },
    comment: {
      type: Comment,
      description: 'A single comment',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (source, args, context, info) => {
        return comments.getOne(args.id);
      }
    },
    posts: {
      type: new GraphQLList(Post),
      description: 'A list of posts',
      resolve: (source, args, context, info) => {
        return posts.getAll();
      }
    },
    post: {
      type: Post,
      description: 'A single post',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (source, args, context, info) => {
        return posts.getOne(args.id);
      }
    },
    users: {
      type: new GraphQLList(User),
      description: 'A list of users',
      resolve: (source, args, context, info) => {
        return users.getAll();
      }
    },
    user: {
      type: User,
      description: 'A single user',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (source, args, context, info) => {
        return users.getOne(args.id);
      }
    }
  }
});

export default QueryType;
