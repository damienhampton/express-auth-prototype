const express = require('express');
const app = express();

function create({ myApp, authoriser }){

  app.use(authoriser)

  app.get('/public', (_, res) => res.json(myApp.publicStuff()));
  app.get('/secret-cats', (_, res) => res.json(myApp.secretCats()));
  app.get('/secret-cats/:id', (req, res) => res.json(myApp.secretCatsFromId(req.params.id)));
  
  app.server = app.listen(3000);
  return app;
}

module.exports = { create };