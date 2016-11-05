var React = require('react');

var Task = require('./Task');

var KanbanList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(task) {
      return (
        <Task author={task.author} key={task.id}>
          {task.text}
        </Task>
      );
    });
    return (
      <div className="kanbanList">
        {commentNodes}
      </div>
    );
  }
});

module.exports = KanbanList;
