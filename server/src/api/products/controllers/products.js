'use strict';

/**
 * products controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::products.products');
