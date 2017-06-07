import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import Post from '../Post';

import posts from '../../loaders/posts';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A registered user of the site',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    displayName: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
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
        return posts.getAllByUser(source.id);
      }
    }
  })
});

export default User;
