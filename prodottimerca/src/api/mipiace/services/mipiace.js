'use strict';

/**
 * mipiace service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mipiace.mipiace');
