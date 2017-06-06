import { Schema } from 'mongoose';
import Mongoose from '../../mongoose';

const commentSchema = new Schema({
  lastUpdated: {
    default: Date.now,
    type: Date
  },
  title: {
    required: true,
    type: Schema.Types.String
  },
  body: {
    required: true,
    type: Schema.Types.String
  },
  userId: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  postId: {
    ref: 'Post',
    type: Schema.Types.ObjectId
  }
});

commentSchema.pre('update', function() {
  this.update({}, { $set: { lastUpdated: new Date() } });
});

export default Mongoose.model('Comment', commentSchema);
