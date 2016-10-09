var React = require('react');

var CommentBox = require('./commentBox');


ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
