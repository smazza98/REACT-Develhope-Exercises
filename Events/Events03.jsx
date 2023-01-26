class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButton: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      lastButton: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Last button pressed: {this.state.lastButton}</h1>
        <button value="Button 1" onClick={this.handleClick}>
          Button 1
        </button>
        <button value="Button 2" onClick={this.handleClick}>
          Button 2
        </button>
        <button value="Button 3" onClick={this.handleClick}>
          Button 3
        </button>
      </div>
    );
  }
}
