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
        color: '#598381',
        marginLeft: '6em',
        fontFamily: 'Prompt',
      }
      const headingStyle = {
        fontSize: '20px',
        marginLeft: '5em',
        color: '#177E89',
        fontFamily: 'Prompt',
      }
    
    return (
      <div>
        <div>
          <p style={headingStyle}>User name:</p>
          <p style={style}>{this.props.user.name}</p>
        </div>
        <div>
          <p style={headingStyle}>User id:</p>
          <p style={style}>{this.props.user.account}</p>
        </div>
        <div>
          <p style={headingStyle}>App name:</p>
          <p style={style}>{app}</p>
        </div>
      </div>
    );
  }
}

export default AccountDetail;
