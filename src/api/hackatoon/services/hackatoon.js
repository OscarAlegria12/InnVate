'use strict';

/**
 * hackatoon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hackatoon.hackatoon');
