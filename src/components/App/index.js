import React, { Component } from 'react';
import Body from './Body';

class App extends Component {
  componentDidRender() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        Header
        <Body />
        Footer
      </div>
    );
  }
}

export default App;
