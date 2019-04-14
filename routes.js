const routes = require('next-routes');

module.exports = routes()
  .add('Thoughts', '/thoughts')
  .add('Thought', '/thoughts/:slug', 'Thoughts/Post');
