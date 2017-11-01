import React from 'react';

class AccountDetail extends React.Component {
  render(){
    if(!this.props.user){
      return null;
    }

    var accounts = this.props.accounts, id = this.props.user.account, app = "";
        
    for (var account of accounts){
      if (account.id === id){
        app = "hello";
        Object.keys(account.text.apps).forEach(function(key) {
            app = account.text.apps[key].title;
        });
       
      }
    }

    const style = {
        fontSize: '20px',
        color: 'rebeccapurple',
        marginLeft: '6em'
      }
      const headingStyle = {
        fontSize: '20px',
        marginLeft: '5em',
      }
    
    return (
      <div>
        <div>
          <p style={headingStyle}>User name is:</p>
          <p style={style}>{this.props.user.name}</p>
        </div>
        <div>
          <p style={headingStyle}>User id is:</p>
          <p style={style}>{this.props.user.account}</p>
        </div>
        <div>
          <p style={headingStyle}>App name is:</p>
          <p style={style}>{app}</p>
        </div>
      </div>
    );
  }
}

export default AccountDetail;
