import User from './User'
import UserClass from './UserClass'
import React from 'react'

class AboutUs extends React.Component{
    
    constructor(props){
        super(props)
        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("parent didmount")
    }
    render(){
        console.log("parent render ");
        return (
            <div>
            <h1>About us</h1>
            <UserClass name={"kasak class"}/>
        </div>
        )
    }
}
export default AboutUs