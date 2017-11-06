import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redClicked: false,
      blueClicked: false
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div
            className={this.state.redClicked ? "red box animate-red" : "red box"}
            onClick={_ => this.setState({redClicked: !this.state.redClicked})}>
          </div>
          <div
            className={this.state.blueClicked ? "blue box animate-blue" : "blue box"}
            onClick={_ => this.setState({blueClicked: !this.state.blueClicked})}>
          </div>
          <p className="text">hover or click for animated effects!</p>
        </div>
      </div>
    );
  }
}

export default App;
