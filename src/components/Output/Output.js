import React, { useState } from "react";
import { useEffect } from "react";
import User from "./../User/User";
import "./Output.css";

export default function Output(props) {
   
   let searchResults = [];
   useEffect(() => {
      searchResults = props.users.filter(user => {
         return user.name.includes(props.searchRequest);
      });
      console.log(searchResults);
   })
   

   return (
      <div className="output">
         {props.searchRequest === '' ? 
            props.users.map((user, i) => <User key={i} users={props.users[i]} />)
            : searchResults.map((user, i) => <User key={i} users={props.users[i]}/>)
         }
      </div>
   );
}

// {props.users.map((user, i) => <User key={i} users={props.users[i]}/>)}
