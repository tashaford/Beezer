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
            console.log(account.text.apps[key].title);
            app = account.text.apps[key].title;
        });
       
      }
    }

    const style = {
        fontSize: '30px',
        color: 'rebeccapurple',
        textAlign: 'center'
      }
    
    return (
      <div>
        <h3 style={style}>{this.props.user.name}</h3>
        <h3 style={style}>{app}</h3>
      </div>
    );
  }
}

export default AccountDetail;
