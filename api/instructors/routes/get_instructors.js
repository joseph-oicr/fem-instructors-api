'use strict';

const instructorsData = require('../../../data/instructors');
const queryValidator = require('./../validation/get_instructors').queryValidator;
const sortBy = require('lodash').sortBy;

module.exports = {
  method: 'GET',
  path: '/api/instructors',
  handler: (request, reply) => {
    const sortDirection = request.query.sortDirection;
    const sortKey = request.query.sortKey;

    const sortData = (data, direction, key) => {
      if (direction === 'asc') {
        return sortBy(data, key);
      } else if (direction === 'desc') {
        return sortBy(data, key).reverse();
      } else {
        return data;
      }
    };

    reply(sortData(instructorsData, sortDirection, sortKey));
  },
  config: {
    validate: {
      query: queryValidator
    }
  }
};