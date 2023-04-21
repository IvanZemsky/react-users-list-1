import React from 'react'
import User from './../User/User';
import './Output.css';

export default function Output(props) {
   return (
         <div className="output">
            {props.users.map(item => <User key={props.users.indexOf(item)} name={item}/>)}
         </div>
   );
}