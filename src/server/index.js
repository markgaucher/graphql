import Glue from 'glue';
import Bluebird from 'bluebird';

import glueManifest from './config/glueManifest';

global.Promise = Bluebird;

Glue.compose(glueManifest, { relativeTo: __dirname }, (error, server) => {
  server.start(error => {
    if (error) {
      throw error;
    }

    console.log(`SERVER running at: ${server.info.uri}`);
  });
});
