import Payload from '../Payload';

import User from './User';

const AddUserPayload = Payload('AddUser', {
  user: {
    type: User,
    resolve: source => source
  }
});

export default AddUserPayload;
