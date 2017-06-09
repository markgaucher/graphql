import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import Input from '../Input';

const AddCommentInput = Input('AddComment', {
  body: {
    type: new GraphQLNonNull(GraphQLString)
  },
  postId: {
    type: new GraphQLNonNull(GraphQLID)
  },
  title: {
    type: new GraphQLNonNull(GraphQLString)
  },
  userId: {
    type: new GraphQLNonNull(GraphQLID)
  }
});

export default AddCommentInput;
