import React from 'react';

class AccountSelector extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectedIndex: undefined
    };
  }

  handleChange(event) {
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    });
    const selectUser = this.props.users[newIndex];
    this.props.selectUser(selectUser);
  }

  render() {
    const options = this.props.users.map((user, index) => {
      return <option value={index} key={index}>{user.name}</option>
    })

    const style = {
      fontSize: '1em',
      color: '#08605F',
      background: '#FFF',
      fontFamily: 'Prompt',
    }
    const divStyle = {
      marginLeft: '2em',
      marginBottom: '1em',
    }

    return (
      <div style={divStyle}>
        <select style={style} id="users" value={this.state.selectedIndex} onChange={ this.handleChange.bind(this) } >{options}</select>
      </div>
      );
  }
}

export default AccountSelector;
