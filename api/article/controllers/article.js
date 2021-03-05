'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const isEmpty = require('../../../utils/is-empty');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    const { title, body } = ctx.request.body;

    // Validate request body
    let errors = {};
    if (isEmpty(title)) errors.title = 'Title must not be empty';
    if (isEmpty(body)) errors.body = 'Body must not be empty';

    // Check for errors and return if any
    if (Object.keys(errors).length > 0) {
      ctx.response.status = 400;
      ctx.response.body = errors;
      return;
    }

    if (ctx.is('multipart')) {
      // If is multipart request upload files
      ctx.request.body.data = JSON.stringify({ title, body });
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.article.create(
        {
          ...data,
          author: ctx.state.user.id,
        },
        { files }
      );
    } else {
      entity = await strapi.services.article.create({
        ...ctx.request.body,
        author: ctx.state.user.id,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
  async findOne(ctx) {
    const { id } = ctx.params; // here it was { id }

    const entity = await strapi.services.article.findOne({ slug: id }); // here it was { slug: id }
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
