import React from 'react'


class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
          count:0,
        }
        console.log(this.props.name +"child constructor");
    }
    componentDidMount(){
      console.log(this.props.name+"child didmount")
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
        {console.log(this.props.name+"child render")}
      </div>
    );
  }
}

export default UserClass;