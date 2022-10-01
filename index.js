'use strict';

require('dotenv').config();
// Start up DB Server
const { db, start } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {

    // Start the web server
    require('./src/server.js').start(process.env.PORT);
  });

