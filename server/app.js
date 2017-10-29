/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

/**
 * Load environment variables from .env file,
 * where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

/**
 * Create Express server.
 */
const app = express();

mongoose.connect('mongodb://localhost/vue-exp', {
  useMongoClient: true,
  /* other options */
});

/**
 * Connect to MongoDB.
 */
// mongoose.Promise = global.Promise;
// mongoose.connect((process.env.MONGODB_URI || process.env.MONGOLAB_URI), {
//   useMongoClient: true
// });
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/**
 * Express configuration.
 */

app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000);


app.use(morgan('combined'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));


/**
 * Routes
 */
const index = require('./routes/index');

app.use('/', index);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
