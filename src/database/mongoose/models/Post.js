import { Schema } from 'mongoose';
import Mongoose from '../../mongoose';

const postSchema = new Schema({
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
  }
});

postSchema.pre('update', function() {
  this.update({}, { $set: { lastUpdated: new Date() } });
});

export default Mongoose.model('Post', postSchema);
