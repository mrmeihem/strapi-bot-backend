'use strict';

/**
 * t-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::t-post.t-post');
