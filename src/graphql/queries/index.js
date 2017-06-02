import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';

import Post from '../types/Post';
import User from '../types/User';

import posts from '../resolvers/posts';
import users from '../resolvers/users';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
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
          type: new GraphQLNonNull(GraphQLInt)
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
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (source, args, context, info) => {
        return users.getOne(args.id);
      }
    }
  }
});

export default QueryType;
