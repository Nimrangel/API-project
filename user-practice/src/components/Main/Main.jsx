import React from 'react'
import "./Main.css"

function Main({name,phone,email,registered,location,picture,getData}) {
 
  return (
    <div className='cardWrapper'>
      <div className='cardMain'>
        <div className='cardHeader'>
          <img src={picture?.large} alt={name?.first} />
          <p>{name?.first} {name?.last}</p>
        </div>
        <div className='cardMiddle'>
          <h3>Email: {email}</h3>
          <h3>Phone: {phone}</h3>
          <h3>Location: {location?.city} / {location?.country} {location?.postcode}</h3>
        </div>
          <div className='cardBottom'>
            <p>Date of Birth: {new Date(registered?.date).toLocaleDateString()}</p>
          </div>
      </div>
      <button className='newBtn' onClick={getData}>New Profile</button>
    </div>
  )
}

export default Main