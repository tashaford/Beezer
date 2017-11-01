import React from 'react';
import Flexbox from 'flexbox-react';

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
        fontSize: '1.2em',
        color: '#598381',
        margin: '0em',
        marginLeft: '4em',
        fontFamily: 'Prompt',
      }
      const headingStyle = {
        fontSize: '1.2em',
        margin: '0em',
        marginLeft: '3em',
        color: '#177E89',
        fontFamily: 'Prompt',
      }
    
    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        <Flexbox flexGrow={1}>
          <div>
            <p style={headingStyle}>User name:</p>
            <p style={style}>{this.props.user.name}</p>
      
            <p style={headingStyle}>User id:</p>
            <p style={style}>{this.props.user.account}</p>
        
            <p style={headingStyle}>App name:</p>
            <p style={style}>{app}</p>
          </div>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default AccountDetail;
