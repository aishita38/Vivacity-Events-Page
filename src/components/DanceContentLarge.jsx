import React from 'react'
import subtext from '../assets/Subtext-19.webp'

const DanceContentLarge = () => {
  return (
    <div className="flex flex-wrap w-full justify-center">
      
      {/* Card 1 */}
      <div
        className="relative overflow-hidden w-1/2 h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://d2tfnz5m7k1weq.cloudfront.net/TopLeftimg.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Tag 1 */}
        <img
          src="https://d2tfnz5m7k1weq.cloudfront.net/StreetDance1.svg"
          alt="Street Dance"
          className="absolute bottom-23 left-24 w-1/3 aspect-w-14 aspect-h-33.52 drop-shadow-md z-10"
        />

        {/* Tag 2 background with text */}
        <div
          className="absolute bottom-8 left-24 w-2/3 aspect-auto flex items-center justify-start px-6 py-4"
          style={{
            backgroundImage: `url(${subtext})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <p className="text-black font-bold text-xs leading-tight uppercase tracking-tight">LET THE STREETS BEAR WITNESS TO ELECTRIFYING PERFORMANCES AND EXHILARATING BEATS. LET YOUR SPIRITS SOAR WITH STREET DANCE!</p>
        </div>
      </div>

    </div>
  )
}

export default DanceContentLarge
