'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.createExtensionIfNotExists('uuid-ossp')
    this.create('users', (table) => {
      table
        .uuid('id')
        .primary()
        .defaultTo(this.db.raw('uuid_generate_v4()'))
      table
        .string('name', 80)
        .notNullable()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table
        .string('password', 60)
        .notNullable()
      table
        .string('city', 60)
        .notNullable()
      table
        .string('neighborhood', 60)
        .notNullable()
      table
        .string('avatar', 254)
      table
        .timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
