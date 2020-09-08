'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table
        .uuid('id')
        .primary()
        .defaultTo(this.db.raw('uuid_generate_v4()'))
      table
        .string('name')
      table
        .string('type')
      table
        .integer('amount')
      table
        .boolean('sell')
      table
        .string('city')
      table
        .string('neighborhood')
      table
        .string('thumbnail')
      table
        .float('price')
        .notNullable()
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
      table
        .timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
