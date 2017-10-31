import React from 'react';

class AccountDetail extends React.Component {
  render(){
    if(!this.props.user){
      return null;
    }

    const style = {
        fontSize: '30px',
        color: 'rebeccapurple',
        textAlign: 'center'
      }
    
    return (
      <div>
        <h3 style={style}>{this.props.user.name}</h3>
      </div>
    );
  }
}

export default AccountDetail;
