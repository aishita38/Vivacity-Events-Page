import React from 'react'
import subtext19 from '../assets/Subtext-19.webp'
import customFont from '../assets/ReadyforAnythingBB-Regular-6ATj6zd_.ttf'

const DanceContentLarge = ({ danceCards }) => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full px-5 py-5 gap-4">
      
      {/* Font Face */}
      <style>
        {`
          @font-face {
            font-family: 'ReadyForAnything';
            src: url(${customFont}) format('truetype');
          }
        `}
      </style>

      {danceCards.map((card, index) => (
        <div
          key={index}
          className={`
            relative overflow-hidden 
            w-full
            md:w-auto
            lg:w-auto
            ${card.aspect}                
            md:h-[200px]
            lg:h-[350px]
            flex items-center justify-center
            transition-all duration-300
          `}
          style={{
            backgroundImage: `url('${card.bg}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-[15%] left-[6%] w-[66%]">
            <img
              src={card.img}
              alt={card.title}
              className="relative w-1/2 drop-shadow-md"
            />

            <div
              className="relative w-full aspect-auto flex items-center justify-start"
              style={{
                backgroundImage: `url(${subtext19})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                padding: '1.5% 2.5%',
              }}
            >
              <p
                className="text-black leading-tight uppercase tracking-tight"
                style={{
                  fontSize: 'clamp(0.4rem, 1.2vw, 0.75rem)',
                  fontFamily: 'ReadyForAnything, sans-serif',
                  fontWeight: 'bold',
                }}
              >
                {card.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DanceContentLarge