import React from 'react'
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt='possibility'/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get started</h4>
        <h1 className="gradient__text"> The possibilities are beyond you imagination</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias qui placeat consequatur rem perferendis asperiores eum sint praesentium iusto atque. In ducimus iste quas vitae veritatis dolore tenetur minima alias?</p>
        <h4>Request Early Access</h4>
      </div>
    </div>
  )
}

export default Possibility