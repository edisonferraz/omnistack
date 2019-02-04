'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with invites
 */
class InviteController {
  /**
   * Create/save a new invite.
   * POST invites
   */
  async store ({ request, response }) {
    console.log(request.team)
  }
}

module.exports = InviteController
