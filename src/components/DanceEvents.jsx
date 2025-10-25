import React from 'react'
import bg from '../assets/background-viva-dance.webp'
import title from '../assets/DanceTitle2.webp'
import DanceContentLarge from './DanceContentLarge'

const DanceEvents = (props) => {
  return (
    <div
      className="relative w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center  py-10">
        <img src={title} alt="Dance Title" className="w-1/3" />
      </div>
        <DanceContentLarge danceCards = {props.danceCards} />
    </div>
  )
}

export default DanceEvents

