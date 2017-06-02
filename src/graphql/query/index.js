import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';

import Post from '../types/Post';

import posts from '../../database/mock/posts';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    posts: {
      type: new GraphQLList(Post),
      description: 'A list of posts',
      resolve: (source, args, context, info) => {
        return posts;
      }
    },
    post: {
      type: Post,
      description: 'A single post',
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (source, args, context, info) => {
        return posts.find(post => post.id === args.id);
      }
    }
  })
});

export default QueryType;
