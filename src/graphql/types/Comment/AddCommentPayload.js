import Payload from '../Payload';

import Comment from './Comment';

const AddCommentPayload = Payload('AddComment', {
  comment: {
    type: Comment,
    resolve: source => source
  }
});

export default AddCommentPayload;
