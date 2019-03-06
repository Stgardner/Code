import React from 'react';
 
const Badge = (props) => {
    const {firstName, lastName, email, birth, phone, faveFood, aboutMe} = props.badge
      return (
         <div>
             <h3>{firstName} {lastName}</h3>
             <h5>Email: {email}</h5>
             <h5>Place of Birth: {birth}</h5>
             <h5>Phone Number: {phone}</h5>
             <h5>Favorite Food: {faveFood}</h5>
             <h5>About me: {aboutMe}</h5>
         </div>
     )
 }

 export default Badge;