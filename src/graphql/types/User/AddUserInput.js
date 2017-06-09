import { GraphQLNonNull, GraphQLString } from 'graphql';

import Input from '../Input';

const AddUserInput = Input('AddUser', {
  displayName: {
    type: new GraphQLNonNull(GraphQLString)
  },
  firstName: {
    type: new GraphQLNonNull(GraphQLString)
  },
  lastName: {
    type: new GraphQLNonNull(GraphQLString)
  }
});

export default AddUserInput;
