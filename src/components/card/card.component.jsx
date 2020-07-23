import React from 'react'

import './card.style.css'
const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`} />
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
)

export default Card