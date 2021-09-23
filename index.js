const { appendFile } = require('fs/promises');
const app = require('./app.js');
const { conn } = require('./db.js');

// Syncing all the models at once.
