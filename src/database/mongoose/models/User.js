import { Schema } from 'mongoose';
import Mongoose from '../../mongoose';

const userSchema = new Schema({
  displayName: {
    type: Schema.Types.String,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  firstName: {
    type: Schema.Types.String,
    required: true
  },
  lastName: {
    type: Schema.Types.String,
    required: true
  }
});

userSchema.pre('update', function() {
  this.update({}, { $set: { lastUpdated: new Date() } });
});

export default Mongoose.model('User', userSchema);
