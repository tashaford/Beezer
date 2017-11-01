import React from 'react';
import fire from '../fire.js';
import UserSelector from '../components/UserSelector';
import AccountDetail from '../components/AccountDetail';

class ListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      accounts:[],
      focusUser: null
    };
  }

  componentDidMount(){
    let usersRef = fire.database().ref('users').orderByKey().limitToLast(100);
    usersRef.on('child_added', snapshot => {
      let user = { text: snapshot.val(), id: snapshot.key };
      this.setState({ users: [user.text].concat(this.state.users)},);
    })
    let accountsRef = fire.database().ref('accounts').orderByKey().limitToLast(100);
    accountsRef.on('child_added', snapshot => {
      let account = {text: snapshot.val(), id: snapshot.key };
      this.setState({ accounts: [account].concat(this.state.accounts)},);
    })
  }

  setFocusUser(user){
    this.setState({
      focusUser: user
    });
  }
  render() {

    const headingStyle = {
      fontSize: '40px',
      color: '#523249',
      fontFamily: 'Prompt',
      marginBottom: '0.2em',
    }
    const textStyle = {
      fontSize: '25px',
      color: '#08605F',
      fontFamily: 'Prompt',
      marginTop: '0.5em',
      marginBottom: '0.5em',
    }

    return (
      <div>
        <p style={headingStyle}>Users</p>
        <p style={textStyle}>Pick a user from the list below</p>
        <UserSelector users={this.state.users} selectUser={this.setFocusUser.bind(this)} />
        <AccountDetail user={this.state.focusUser} accounts={this.state.accounts} />
      </div>
      );
  }
}

export default ListContainer;
