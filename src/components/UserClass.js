import React from 'react'


class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userInfo:{
              name:"dummy",
              avatar_url:"htthsfjnks"
            }
        }
        // console.log(this.props.name +"child constructor");
    }
    async componentDidMount(){
      const data = await fetch("https://api.github.com/users/palindrome-kasak");
       const jsonData = await data.json();
       this.setState({
        userInfo:jsonData,
       });
       console.log(jsonData);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  render() {
    return (
      
      <div>
        {/* <img src={this.state.userInfo.avatar_url}/> */}
        <h2>{this.state.userInfo.name}</h2>
        
        {/* {console.log(this.props.name+"child render")} */}
      </div>
    );
  }
}

export default UserClass;