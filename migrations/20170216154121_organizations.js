'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('organizations', (table) => {
    table.increments();
    table.string('name');
    table.string('type');
    table.string('phone');
    table.string('hours');
    table.string('website');
    table.string('facebook');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('organizations');
};
