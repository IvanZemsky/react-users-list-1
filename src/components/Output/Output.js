import React, { useState } from "react";
import { useEffect } from "react";
import User from "./../User/User";
import "./Output.css";

export default function Output(props) {
   let [searchResults, setSearchResults] = useState(props.users);

   useEffect(() => {
      let filteredResults = props.users.filter((user) => {
         return user.name
            .toLowerCase()
            .startsWith(props.searchRequest.toLowerCase());
      });
      setSearchResults(filteredResults);
   }, [props.searchRequest]);

   return (
      <div className="output">
         {props.searchRequest === ""
            ? props.users.map((user) => (
                 <User
                    key={user.id}
                    user={user}
                    handleUserUpdate={props.handleUserUpdate}
                 />
              ))
            : searchResults.map((user) => (
                 <User
                    key={user.id}
                    user={user}
                    handleUserUpdate={props.handleUserUpdate}
                 />
              ))}
      </div>
   );
}
