import React from 'react'
import './PinkComponent.css'

export default function PinkComponent() {
  return (
    <div className='pink-box'>
    <div className='supahub-container-row'>
      <div className='supahub-wrapper-md'>
        <div className='supahub-wrapper-md-para1'><p>Public feedback portal</p></div>
        <div className='span-h2'><h2>Your feedback hub, <br/>your way </h2></div>
      </div>
      <div className='supahub-wrapper-md-left'>
       <div className='supahub-wrapper-md-para2'><p>Public feedback portal is where users can leave feature requests and comments about thier ideas and feature requests for your product. These public portals can be customized as per your brand.</p></div>
        <div className='supahub-wrapper-md-btn'><button>Explore feedback boards</button></div>
      </div>
    </div>

       <div className='supahub-container-pics-cards'>
    <div className='supahub-container-pic-row'>
            <img src='/Images/SupahubContainerPic.svg'/>
    </div>


     <div className='suphub-container-paragraph-d'>
      <div className='suphub-container-paragraph-inner-d'>
        <div className='suphub-container-paragraph-h-d'><h2>Comment threads</h2></div>
        <div className='suphub-container-paragraph-para-d'><p>Have discussions with your users to clarify<br/> and understand their needs. </p></div>
        </div>

        <div className='suphub-container-paragraph-inner-d'>
        <div className='suphub-container-paragraph-h-d'><h2>Set OpenGraph image</h2></div>
        <div className='suphub-container-paragraph-para-d'><p>Add an open-graph image that will show up<br/>when you share on social media sites.</p></div>
        </div>

        <div className='suphub-container-paragraph-inner-d'>
        <div className='suphub-container-paragraph-h-d'><h2>Set Dark/Light theme</h2></div>
        <div className='suphub-container-paragraph-para-d'><p>Select theme for your public feedback portal <br/>for consistent user experience.</p></div>
        </div>
     </div>
    </div>
     

  </div>
  )
}
