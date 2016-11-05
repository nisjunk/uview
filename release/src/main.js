var React = require('react');

var Kanban = require('./kanban');


ReactDOM.render(
  <Kanban url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
