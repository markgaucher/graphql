import Payload from '../Payload';

import Post from './Post';

const AddPostPayload = Payload('AddPost', {
  post: {
    type: Post,
    resolve: source => source
  }
});

export default AddPostPayload;
