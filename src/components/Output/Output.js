import React, { useState } from "react";
import { useEffect } from "react";
import User from "./../User/User";
import "./Output.css";

export default function Output(props) {

   let [searchResults, setSearchResults] = useState(props.users);
   
   useEffect(() => {
      let filteredResults = props.users.filter(user => {
         return user.name.toLowerCase().startsWith(props.searchRequest.toLowerCase());
      })
      setSearchResults(filteredResults);
   }, [props.searchRequest]);

   /*
   useEffect(() => {
      console.log(props.searchRequest);
      console.log(props.users);
      console.log(searchResults);
      console.log('--------------');
   }, [searchResults])
   */

   return (
      <div className="output">
         {props.searchRequest === '' ? 
         props.users.map(user => <User key={user.id} user={user} />) :
         searchResults.map(user => <User key={user.id} user={user} />)}
      </div>
   );
}

// {props.users.map((user, i) => <User key={i} users={props.users[i]}/>)}
