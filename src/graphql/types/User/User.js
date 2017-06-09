import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import { Post } from '../Post';

import posts from '../../loaders/posts';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A registered user of the site',
  fields: () => ({
    avatar: {
      type: GraphQLString,
      args: {
        size: {
          defaultValue: 400,
          type: GraphQLInt
        }
      },
      resolve: (source, args) => {
        return `http://www.placehold.it/${args.size}x${args.size}`;
      }
    },
    displayName: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    id: {
      type: GraphQLID
    },
    lastName: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString,
      resolve: (source, args, context, info) => {
        return `${source.firstName} ${source.lastName}`;
      }
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: (source, args, context, info) => {
        return posts.getAllByUser(context.loaders.postLoader, source.id);
      }
    }
  })
});

export default User;
