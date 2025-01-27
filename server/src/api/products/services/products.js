'use strict';

/**
 * products service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products.products');
