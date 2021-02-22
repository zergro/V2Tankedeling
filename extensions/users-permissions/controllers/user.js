const { sanitizeEntity } = require('strapi-utils');

const sanitizeUser = (user) =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model,
  });

// https://strapi.io/documentation/developer-docs/latest/concepts/customization.html#plugin-extensions
module.exports = {
  async findOne(ctx) {
    // TODO: Get username and search by that instead of id
    console.log(ctx);
    const { id } = ctx.params;
    console.log(ctx.params);
    let data = await strapi.plugins['users-permissions'].services.user.fetch({
      id,
    });
    console.log(data);
    console.log(data.username);

    // TODO: Remove fields like email, password...etc
    if (data) {
      data = sanitizeUser(data);
    }

    // Find articles posted by this user
    const articles = await strapi.services.article.find({ user: id });

    ctx.body = { ...data, articles };
  },
};
