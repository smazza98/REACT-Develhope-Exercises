import React from 'react';
import Hello from './Hello';

// Components - 03
// Write a class component called App that renders the Hello component within a div tag.

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

export default App;
