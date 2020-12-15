'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async findOneUrl(ct) {
        const { url } = ct.params;
        // console.log(url)
        const entity = await strapi.services.blog.findOne({ url })
        return sanitizeEntity(entity, { model: strapi.models.blog });
    }
};
