module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  var loremIpsum = require('lorem-ipsum');

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [{
        id: 1,
        title: "You're missing the point of server-rendered JavaScript apps",
        body: loremIpsum()
      }, {
        id: 2,
        title: "JavaScript Thoughtleadering for Dummies",
        body: loremIpsum()
      }]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
