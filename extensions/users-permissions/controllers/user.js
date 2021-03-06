const { sanitizeEntity } = require('strapi-utils');

const sanitizeUser = (user) =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model,
  });

// https://strapi.io/documentation/developer-docs/latest/concepts/customization.html#plugin-extensions
module.exports = {
  async findOne(ctx) {
    // TODO: Get username and search by that instead of id
    const { username } = ctx.params;
    let user = await strapi.plugins['users-permissions'].services.user.fetch({
      username,
    });

    // TODO: Remove fields like email, password...etc
    if (user) {
      user = sanitizeUser(user);
    }

    // // Find articles posted by this user
    const articles = await strapi.services.article.find({ author: user.id });

    ctx.body = { ...user, articles };
  },
  async me(ctx) {
    let user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: 'No authorization header was found' }] },
      ]);
    }

    user = sanitizeUser(user);
    user.articles = await strapi.services.article.find({ author: user.id });

    ctx.body = user;
  },
};
