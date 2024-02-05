import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2> location: frz</h2>
        <h3>comp: CSG</h3>
      </div>
    );
  }
}

export default UserClass;