var React = require('react');
var Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired
    }),
    onDelete: React.PropTypes.func.isRequired
  },
  _onDelete() {
    this.props.onDelete(this.props.todo.id);
  },
  render() {
    return (
      <div>
        <span>{this.props.todo.text}</span>
        <button onClick={this._onDelete}>delete</button>
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState() {
    return {
      todos: [
        {id:1, text:"advent calendar1"},
        {id:2, text:"advent calendar2"},
        {id:3, text:"advent calendar3"}
      ]
    };
  },
  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  },
  render() {
    var todos = this.state.todos.map((todo) => {
      return <li key={todo.id}><Todo onDelete={this.deleteTodo} todo={todo} /></li>;
    });
    return <ul>{todos}</ul>;
  }
});

module.exports = TodoList;
