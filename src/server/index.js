import Glue from 'glue';
import Bluebird from 'bluebird';

import Mongoose from '../database/mongoose';
import generateData from '../database/mongoose/generateData';

import glueManifest from './config/glueManifest';

global.Promise = Bluebird;

Glue.compose(glueManifest, { relativeTo: __dirname }, (error, server) => {
  server.start(error => {
    if (error) {
      throw error;
    }

    Mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/normative');
    generateData();

    console.log(`SERVER running at: ${server.info.uri}`);
  });
});
