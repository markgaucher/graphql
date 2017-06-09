import { graphqlHapi, graphiqlHapi } from 'graphql-server-hapi';
import random from 'lodash/random';

import { comment, post, user } from '../database/mongoose/models';
import schema from '../graphql/schema';

import EntityLoader from '../services/EntityLoader';

export const register = (server, options, next) => {
  server.register({
    register: graphqlHapi,
    options: {
      graphqlOptions: request => ({
        context: {
          loaders: {
            commentLoader: new EntityLoader(comment, 'comment'),
            postLoader: new EntityLoader(post, 'post'),
            userLoader: new EntityLoader(user, 'user')
          }
        },
        schema
      }),
      path: '/graphql'
    }
  });

  server.register({
    register: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      }
    }
  });

  next();
};

register.attributes = {
  name: 'api'
};
