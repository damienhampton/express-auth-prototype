'use strict'
function create(rules){
  function authoriser(req, res, next){
    const reqRules = rules.find(r => req.path.match(r.route));
    const pathParams = req.path.match(reqRules.route);
    
    if(!reqRules || !reqRules.rules){
      return denied(res);
    }
    const allow = reqRules.rules.reduce((allow, rule) => {
      return rule(req, pathParams) && allow;
    }, true);

    if(!allow){
      return denied(res);
    }
    next();
  }
  return authoriser;
}

function denied(res){
  res.status = 403;
  res.json({ message: 'denied' })
}

module.exports = { create };