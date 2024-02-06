import React from 'react'


class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
          count:0,
          count2:2,
        }
    }
  render() {
    const {count2}=this.state;
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>count={this.state.count}</h3>
        <h3>{count2}</h3>
        <h2> location: frz</h2>
        <h3>comp: CSG</h3>
      </div>
    );
  }
}

export default UserClass;