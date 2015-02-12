module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  var loremIpsum = require('lorem-ipsum');

  var posts = [{
    id: 1,
    title: "You're missing the point of server-rendered JavaScript apps",
    body: generateLoremIpsum()
  }, {
    id: 2,
    title: "JavaScript Thoughtleadering for Dummies",
    body: generateLoremIpsum()
  }];

  function generateLoremIpsum() {
    return loremIpsum({
      count: 5,
      units: 'paragraphs',
      format: 'html'
    });
  }

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    var post = posts.filter(function(i) { return i.id+'' === req.params.id; })[0]
    res.send({
      'posts': [post]
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
