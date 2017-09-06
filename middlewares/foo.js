'use strict';
const {logger} = require('../utilities/logger');

function myEvenBetterFunc() {
  logger.info('1 `myEvenBetterFunc` running');
  logger.warn('2 be forwarned, it\'s gonna blow up');
  try {
    throw "3 You're exceptional!";
  }
  catch (e) {
    logger.error(e);
  }
};

function foo(req, res, next) {
  myEvenBetterFunc();
  next();
}; 

module.exports = {foo};
