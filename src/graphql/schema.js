import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import queryType from './queries';

const Schema = new GraphQLSchema({
  query: queryType
});

export default Schema;
