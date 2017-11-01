import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <style>{'body { background-color: #DCEED1; margin: 3em}'}</style>
        <ListContainer />
      </div>
      );
  }
}

export default App;
