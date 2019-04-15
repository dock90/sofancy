const routes = require('next-routes');

module.exports = routes()
  .add('thoughts', '/thoughts')
  .add('thought', '/thoughts/:slug', '/post');
