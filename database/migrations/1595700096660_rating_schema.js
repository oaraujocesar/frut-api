'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingSchema extends Schema {
  up () {
    this.create('ratings', (table) => {
      table.uuid('id')
        .primary()
        .defaultTo(this.db.raw('uuid_generate_v4()'))
      table
        .integer('rating')
      table.uuid('user_id')
        .references('users.id')
      table
        .timestamps()
    })
  }

  down () {
    this.drop('ratings')
  }
}

module.exports = RatingSchema
