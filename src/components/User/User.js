import React from 'react';

export default function User(props) {

   const openCardDesc = (event) => {
      if (event.currentTarget.style.height) {
         event.currentTarget.style.height = null;
      }
      else {
         event.currentTarget.style.height = event.currentTarget.scrollHeight + 'px';
      }
   }

   return (
      <div className="user-card" onClick={openCardDesc}>
         <p className="card-name">{props.name}</p>
         <div className="card-info">
            <p className='card-info_age'>Возраст: {props.age}</p>
            <p className='card-info_desc'>Описание: {props.desc}</p>
         </div>
      </div>
   );
}