/**
 * Export default singleton.
 *
 * @api public
 */
exports = module.exports = {};

/**
 * Expose modules.
 */
var common = require('./common');
exports.Password = common.Password;

exports.Express = require('./express');