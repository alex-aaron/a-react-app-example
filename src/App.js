import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent'
import TestComponent from './TestComponent'
import TestFunctionalComponent from './TestFunctionalComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Test React App</h1>
        <TestComponent />
        <TestFunctionalComponent />
        <ButtonComponent />
      </div>
    );
  }
}

export default App;
