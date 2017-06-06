import Mongoose from 'mongoose';
import Bluebird from 'bluebird';

Mongoose.Promise = Bluebird;

export default Mongoose;
