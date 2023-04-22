import React from 'react'
import User from './../User/User';
import './Output.css';

export default function Output(props) {
   return (
         <div className="output">
            {props.users.map((user, i) => <User key={i} name={user.name} age={user.age} desc={user.desc}/>)}
         </div>
   );
}