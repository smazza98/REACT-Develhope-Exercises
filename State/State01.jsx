class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    }, 1000);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
