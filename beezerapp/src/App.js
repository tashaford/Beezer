import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';

class App extends Component {

  render() {

    const style = {
      margin: '5em',
    }

    return (
      <div style={style} className="App">
        <ListContainer />
      </div>
      );
  }
}

export default App;
