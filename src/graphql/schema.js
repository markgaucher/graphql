import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import queryType from './query';

const Schema = new GraphQLSchema({
  query: queryType
});

export default Schema;
