import {useState} from 'react'

const User = (props)=>{
    const[count]=useState(0);
    return (
<div>
    <h2>{props.name}</h2>
    <h3>count={count}</h3>
    <h2> location: frz</h2>
    <h3>comp: CSG</h3>
</div>
    );
}
export default User;