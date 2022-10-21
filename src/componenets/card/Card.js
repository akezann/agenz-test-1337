import React from 'react';
import './Card.css'
function Card(props) {
  return (
    <div className='card'>
      <div className="image">
        <img src={props.image} alt="hotel" className='img-hot '/>
      </div>
      <div className="desc">
        <h1>{props.price} MAD</h1>
        <h2><span>Maison</span>a vendre<div className='line-v'></div><span>2</span>chambres<div className='line-v'></div><span>140</span> m<sup>2</sup></h2>
        <h3>Marrakech, Ennakhil(Palmeraie)</h3>
        <h4>Announce par: MARRAKECH CONSEILS INVEST</h4>
      </div>
      <div className="par"><p>{props.days} days on agenz</p></div>
      <div className="heart"><img src={props.icon} alt="heart" /></div>
    </div>
  )
}

export default Card;