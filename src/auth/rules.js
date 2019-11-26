'use strict'

//rule functions
const allowAll = () => true;
const requireAdmin = (req) => req.query.role === 'admin';
const requireCatIdMatches = (req, pathParams) => parseInt(req.query.catId) === parseInt(pathParams[1]);

//rule sets
const publicRouteRules = [
  allowAll
]

const secretCatRules = [
  requireAdmin
]

const secretCatsWithId = [
  requireAdmin,
  requireCatIdMatches
]

function createRuleset(route, rules){
  return {
    route, rules
  }
}

//all routes and rules
const rules = [
  createRuleset('^/public$', publicRouteRules),
  createRuleset('^/secret-cats$', secretCatRules),
  createRuleset('^/secret-cats/([0-9]+)$', secretCatsWithId),
]

module.exports = rules;