import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import Input from '../Input';

const AddPostInput = Input('AddPost', {
  body: {
    type: new GraphQLNonNull(GraphQLString)
  },
  title: {
    type: new GraphQLNonNull(GraphQLString)
  },
  userId: {
    type: new GraphQLNonNull(GraphQLID)
  }
});

export default AddPostInput;
