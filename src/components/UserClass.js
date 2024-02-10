import React from 'react'


class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
          count:0,
        }
        console.log("child constructor");
    }
    componentDidMount(){
      console.log("child didmount")
  }
  render() {
    return (
      
      <div>
        <h2>{this.props.name}</h2>
        <h3>count={this.state.count}</h3>
        <button onClick={()=>{
          this.setState(
            {count:this.state.count+1,}
          );
        }}>count Increaee</button>

        <h2> location: frz</h2>
        <h3>comp: CSG</h3>
        {console.log("child render")}
      </div>
    );
  }
}

export default UserClass;