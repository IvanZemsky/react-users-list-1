import React from 'react';

export default function User(props) {
   return (
      <div className="user-card">
         <p className="card-name">{props.name}</p>
         <div className="card-desc"></div>
      </div>
   );
}