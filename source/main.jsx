/** @jsx React.DOM */
var Hello = require('./Hello');
var TodoList = require('./TodoList');
var Counter = require('./Counter');
var React = require('react');

React.render(
  <Hello />,
  document.getElementById('example')
);
React.render(
  <TodoList />,
  document.getElementById('example2')
);
React.render(
  <Counter />,
  document.getElementById('example3')
);
