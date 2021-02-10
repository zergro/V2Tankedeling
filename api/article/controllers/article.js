"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    console.log(ctx.request.body);
    console.log(ctx.state.user);
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.article.create(data, { files });
    } else {
      entity = await strapi.services.article.create({
        ...ctx.request.body,
        user: ctx.state.user.id,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
