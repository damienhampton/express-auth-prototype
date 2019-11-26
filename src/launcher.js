const myApp = require('./my-app');
const expressApp = require('./express-app');

const rules = require('./auth/rules');
const authoriserCreater = require('./lib/authoriser-creater');
const authoriser = authoriserCreater.create(rules);

expressApp.create({ myApp, authoriser });