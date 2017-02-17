'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('videos', (table) => {
    table.increments();
    table.integer('organization_id')
      .notNullable()
      .references('organizations.id')
      .onDelete('CASCADE')
      .index();
    table.string('title');
    table.string('description');
    table.string('youtube_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('videos');
};
