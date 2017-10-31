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
    const selectedAccount = this.props.users[newIndex];
    this.props.selectAccount(selectedAccount);
  }

  render() {
      const options = this.props.users.map((user, index) => {
          return <option value={index} key={index}>{user.name}</option>
      })

      const style = {
          fontSize: '20px',
          color: '#000',
          extAlign: 'center'
        }

      return (
        <select style={style} id="users" value={this.state.selectedIndex} onChange={ this.handleChange.bind(this) } >
          {options}
        </select>
      );
    }
}

export default AccountSelector;
