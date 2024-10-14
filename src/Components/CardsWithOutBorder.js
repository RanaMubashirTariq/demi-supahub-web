import React from 'react'
import './CardsWithOutBorder.css'

export default function CardsWithOutBorder() {
  return (
    <>
    <div className='CardsWithOutBorder'>
         <div className='CardsWithOutBorder-inner-d'>
               <div className='card-simple'>
                <img src="/Images/Card1.svg"  />
                <div className='cards-para-d'><p className='cards-para-inner'>I love how simple Supahub makes it for <br/>our users and for admins to manage user feedback and changelog.</p></div>
                <div className='card-rating-d'>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>Jackson Schaal</p>
                </div>
               </div>
               <div className='card-simple'>
                <img src="/Images/Card2.svg"  />
                <div className='cards-para-d'><p className='cards-para-inner'>I dig this concept - Supahub helped us out a ton with prioritizing customer <br/>feedback!</p></div>
                <div className='card-rating-d'>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>Anant Dubey</p>
                </div>
               </div>
               <div className='card-simple'>
                <img src="/Images/Card3.svg"  />
                <div className='cards-para-d'><p className='cards-para-inner'>Our Support team loves having a place to direct customers where they can feel like their voice is heard.</p></div>
                <div className='card-rating-d'>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>Emily Studer</p>
                </div>
               </div>
         </div>
    </div>
    </>
  )
}
