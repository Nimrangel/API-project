import React from 'react'
import "./Header.css"

function Header({user}) {
    const {name, picture} = user
    console.log(user);
  return (
    <div className='headerWrapper'>
        <img src={picture?.medium} alt={name?.first} />
        <p>{name?.first} {name?.last}</p>
    </div>
  )
}

export default Header