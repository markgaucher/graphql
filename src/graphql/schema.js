import { GraphQLSchema } from 'graphql';

import mutationType from './mutations';
import queryType from './queries';

const Schema = new GraphQLSchema({
  mutation: mutationType,
  query: queryType
});

export default Schema;
