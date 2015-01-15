var React = require('react');
var Counter = React.createClass({
  propTypes: {
    initialCount: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      initialCount: 0
    };
  },
  getInitialState() {
    return {
      count: this.props.initialCount
    }
  },
  onClick() {
    this.setState({ count: this.state.count + 1 });
  },
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }
});
module.exports = Counter;

