import React from 'react'
import bg from '../assets/background-viva-dance.webp'
import title from '../assets/DanceTitle2.webp'

const DanceEvents = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center  py-10">
        <img src={title} alt="Dance Title" className="w-1/3" />
      </div>

      <div className='flex flex-row flex-wrap lg:block'>
          
      </div>
    </div>
  )
}

export default DanceEvents

