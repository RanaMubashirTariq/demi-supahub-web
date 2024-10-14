import React from 'react'
import './BodySection.css'

export default function BodySection() {
  return (
    <div className='body-section'>
        <div className='body-middle-part'>
            <div  className='body-middle-first-part'><p>Product Feedback & Changelog Platform</p></div>
            <div className='body-middle-second-part'><h2>Central hub to collect feedback & announce product updates</h2></div>
            <div className='body-middle-third-part'><p>With Supahub collect, organize and prioritize feature requests to better understand customer feedback and use them to inform your product roadmap.</p></div>
            <div className='body-middle-fourth-part'>
                <button className='body-middle-right-btn'>signup for free</button>
                <button className='body-middle-left-btn'>see supahub Demo</button>
            </div>
            <div className='body-middle-fivth-part'>
                <div  className='body-middle-macro-pic'><img src="/Images/BodyMiddleMacro.svg"/></div>
                <div className='body-middle-macro-content'>
                    <div className='body-middle-macro-rating'>⭐⭐⭐⭐⭐</div>
                    <div className='body-middle-macro-data'><p>loved by 200+ customers</p></div>
                </div>
            </div>
        </div>
        <div className='body-cards-d'>
           <img src='/Images/BodySectionBack.svg'/>
        </div>
        <div className='body-card-pic'><img src='/Images/ThreeCardBody.svg'/></div>
    </div>
  )
}
