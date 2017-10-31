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
      this.setState({ users: [user.text].concat(this.state.users) });
      console.log(this.state.users);
    })
  }

    setFocusUser(user){
      this.setState({
        focusUser: user
      });
    }
    render() {

      const style = {
          fontSize: '40px',
          color: '#800000',
          textAlign: 'center',
          fontStyle: 'italic',
        }

      return (
        <div>
        <h2 style={style}>Accounts</h2>
        <UserSelector users={this.state.users} selectUser={this.setFocusUser.bind(this)} />
        <AccountDetail user={this.state.focusUser} />
        </div>
        );
    }
  }

  export default ListContainer;
