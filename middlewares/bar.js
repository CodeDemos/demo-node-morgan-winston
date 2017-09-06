'use strict';
const {logger} = require('../utilities/logger');

function myGreatFunc() {
  logger.debug('4 `myGreatFunc` running');
  logger.info('5 better catch it');
};

function bar(req, res, next) {
  myGreatFunc();
  next();
}

module.exports = {bar}