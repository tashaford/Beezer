import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
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
      <Flexbox flexDirection="column" minHeight="100px">
        <Flexbox flexGrow={1}>
          <div style={style} className="App">
            <ListContainer />
            <style>{'body { background-color: #d3d3d3;}'}</style>
          </div>
        </Flexbox>
      </Flexbox>
      );
  }
}

export default App;
