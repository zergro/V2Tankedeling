'use strict';

/**
 * `isAuthenticated` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In isAuthenticated policy.');

  // console.log(ctx.request.headers);

  await next();
};
