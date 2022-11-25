
//Type "rfce" it will use the snipper extention and 
//import all these lines of codes automatically. Very useful!
import React, {useState} from 'react'
import {link} from 'react-router-dom';

function Navbar() {
  return (
    //Get rid of the div and use fragments, aka "<>"
    <>
    <nav className="navbar">
      //Note by default the Emmit snipper, aka the ES React snippets wont
      //work by default, so you need to go to user settings (hotkey: shift+cmd+p, then type user settings)
      //choose the user settings json one, then paste this line of code:
      //See your user settings, copy paste that last line of code
      <div class="navbar-container">
        <Link tp="/" className="navbar-logo">
          TVRL <i className="fab fa-typo3"></i>
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar