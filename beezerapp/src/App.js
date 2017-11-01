import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';

class App extends Component {

  render() {

    const style = {
      height: '26em',
      width: '27em',
      margin: '2em',
      background: '#FFF',
    }


    return (
      <div style={style} className="App">
        <ListContainer />
        <style>{'body { background-color: #d3d3d3;}'}</style>
      </div>
      );
  }
}

export default App;
