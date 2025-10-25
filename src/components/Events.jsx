import React from 'react'
import DanceEvents from './DanceEvents'

const Events = (props) => {
  return (
    <div>
      <DanceEvents danceCards = {props.danceCards}/>
    </div>
  )
}

export default Events
