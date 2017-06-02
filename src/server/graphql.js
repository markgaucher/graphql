import { graphqlHapi, graphiqlHapi } from 'graphql-server-hapi';

import schema from '../graphql/schema';

export const register = (server, options, next) => {
  server.register({
    register: graphqlHapi,
    options: {
      graphqlOptions: {
        schema
      },
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
