class CounterDisplay extends React.Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => ({
        count: state.count + props.increment,
      }));
    }, props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

Counter.defaultProps = {
  initialValue: 0,
  interval: 1000,
  increment: 1,
};
