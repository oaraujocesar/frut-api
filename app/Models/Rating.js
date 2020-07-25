'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rating extends Model {
  users () {
    return this.hasOne('App/Models/User')
  }
}

module.exports = Rating
