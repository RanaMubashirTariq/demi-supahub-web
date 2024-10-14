import React from 'react'
import './NavbarSection.css'
import BodySection from './BodySection'

export default function NavBarSection() {
  return (
    <>
    <div className='navbar-section'>
         <div className='navbar-container'>
               <div className='navbar-right-part'><img src='/Images/NavbarLogo.svg'/></div>
               <div className='navbar-left-part'>
                <ul>
                    <li><select>
                          <option value="">Features</option>
                          <option value="">About us</option>
                          <option value="">Contact Us</option>
                          <option value="">Home</option>
                        </select></li>
                    <li><a href='#'>Demo</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Changeiog</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li className='navbar-li-pic'><img src='/Images/NavbarStar.svg'/></li>
                    <li><button className='navbar-loging-btn'>Login</button></li>
                    <li><button className='navbar-signup-btn'>sign up for free</button></li>
                </ul>
               </div>
              
         </div>
    </div>
      <BodySection/>
    </>
  )
}
