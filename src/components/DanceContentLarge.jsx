import React from 'react'
import subtext19 from '../assets/Subtext-19.webp'
import customFont from '../assets/ReadyforAnythingBB-Regular-6ATj6zd_.ttf'

const DanceContentLarge = () => {
  return (
    <div className="flex flex-wrap w-full justify-center px-2 ">
      
      {/* Font Face Style */}
      <style>
        {`
          @font-face {
            font-family: 'ReadyForAnything';
            src: url(${customFont}) format('truetype');
          }
        `}
      </style>
      
      {/* 1️⃣ Street Dance */}
      <div
        className="relative hidden md:block w-1/2 aspect-[4/3] max-w-full"
        style={{
          backgroundImage: "url('https://d2tfnz5m7k1weq.cloudfront.net/TopLeftimg.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-[15%] left-[6%] w-[66%]">
          <img
            src="https://d2tfnz5m7k1weq.cloudfront.net/StreetDance1.svg"
            alt="Street Dance"
            className="relative w-1/2 drop-shadow-md z-10 mb-2"
          />

          <div
            className="relative w-full aspect-auto flex items-center justify-start"
            style={{
              backgroundImage: `url(${subtext19})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              padding: '1.5% 2.5%',
            }}
          >
            <p className="text-black leading-tight uppercase tracking-tight" style={{
              fontSize: 'clamp(0.4rem, 1.2vw, 0.75rem)',
              fontFamily: 'ReadyForAnything, sans-serif',
              fontWeight: 'bold'
            }}>
              LET THE STREETS BEAR WITNESS TO ELECTRIFYING PERFORMANCES AND EXHILARATING BEATS. LET YOUR SPIRITS SOAR WITH STREET DANCE!
            </p>
          </div>
        </div>
      </div>

      {/* 2️⃣ Let's Tangle */}
      <div
        className="relative hidden md:block w-1/2 aspect-[4/3] max-w-full"
        style={{
          backgroundImage: "url('https://d2tfnz5m7k1weq.cloudfront.net/Mobdancediv.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-[15%] left-[6%] w-[66%]">
          <img
            src="https://d2tfnz5m7k1weq.cloudfront.net/LetsTangle1.svg"
            alt="Let's Tangle"
            className="relative w-1/2 drop-shadow-md z-10 mb-2"
          />

          <div
            className="relative w-full aspect-auto flex items-center justify-start"
            style={{
              backgroundImage: `url(${subtext19})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              padding: '1.5% 2.5%',
            }}
          >
            <p className="text-black leading-tight uppercase tracking-tight" style={{
              fontSize: 'clamp(0.4rem, 1.2vw, 0.75rem)',
              fontFamily: 'ReadyForAnything, sans-serif',
              fontWeight: 'bold'
            }}>
              TWIST, SPIN, AND SHINE IN THIS ELECTRIFYING DANCE COMPETITION!
            </p>
          </div>
        </div>
      </div>

      {/* 3️⃣ Tal Tarang */}
      <div
        className="relative hidden md:block w-1/2 aspect-[4/3] max-w-full"
        style={{
          backgroundImage: "url('https://d2tfnz5m7k1weq.cloudfront.net/TopLeftimg.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-[15%] left-[6%] w-[66%]">
          <img
            src="https://d2tfnz5m7k1weq.cloudfront.net/TalTarang1.svg"
            alt="Tal Tarang"
            className="relative w-1/2 drop-shadow-md z-10 mb-2"
          />

          <div
            className="relative w-full aspect-auto flex items-center justify-start"
            style={{
              backgroundImage: `url(${subtext19})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              padding: '1.5% 2.5%',
            }}
          >
            <p className="text-black leading-tight uppercase tracking-tight" style={{
              fontSize: 'clamp(0.4rem, 1.2vw, 0.75rem)',
              fontFamily: 'ReadyForAnything, sans-serif',
              fontWeight: 'bold'
            }}>
              FEEL THE RHYTHM AND LET YOUR MELODIES COLLIDE IN THIS MUSICAL BATTLE!
            </p>
          </div>
        </div>
      </div>

      {/* 4️⃣ Pump It Up */}
      <div
        className="relative hidden md:block w-1/2 aspect-[4/3] max-w-full"
        style={{
          backgroundImage: "url('https://d2tfnz5m7k1weq.cloudfront.net/Pump%20It%20Up.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-[15%] left-[6%] w-[66%]">
          <img
            src="https://d2tfnz5m7k1weq.cloudfront.net/PumpItUp1.svg"
            alt="Pump It Up"
            className="relative w-1/2 drop-shadow-md z-10 mb-2"
          />

          <div
            className="relative w-full aspect-auto flex items-center justify-start"
            style={{
              backgroundImage: `url(${subtext19})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              padding: '1.5% 2.5%',
            }}
          >
            <p className="text-black leading-tight uppercase tracking-tight" style={{
              fontSize: 'clamp(0.4rem, 1.2vw, 0.75rem)',
              fontFamily: 'ReadyForAnything, sans-serif',
              fontWeight: 'bold'
            }}>
              GET YOUR ENERGY ON AND PUMP UP THE EXCITEMENT WITH HIGH-OCTANE MOVES!
            </p>
          </div>
        </div>
      </div>

      {/* 5️⃣ Razzmatazz */}
      <div
        className="relative hidden md:block w-1/2 aspect-[4/3] max-w-full"
        style={{
          backgroundImage: "url('https://d2tfnz5m7k1weq.cloudfront.net/MiddleLeftimg.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-[15%] left-[6%] w-[66%]">
          <img
            src="https://d2tfnz5m7k1weq.cloudfront.net/Razzmatazz1.svg"
            alt="Razzmatazz"
            className="relative w-1/2 drop-shadow-md z-10 mb-2"
          />

          <div
            className="relative w-full aspect-auto flex items-center justify-start"
            style={{
              backgroundImage: `url(${subtext19})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              padding: '1.5% 2.5%',
            }}
          >
            <p className="text-black leading-tight uppercase tracking-tight" style={{
              fontSize: 'clamp(0.4rem, 1.2vw, 0.75rem)',
              fontFamily: 'ReadyForAnything, sans-serif',
              fontWeight: 'bold'
            }}>
              LIGHTS, CAMERA, SPARKLE! BRING THE GLAMOUR AND DAZZLE TO THE STAGE!
            </p>
          </div>
        </div>
      </div>

      {/* 6️⃣ Mudra */}
      <div
        className="relative hidden md:block w-1/2 aspect-[4/3] max-w-full"
        style={{
          backgroundImage: "url('https://d2tfnz5m7k1weq.cloudfront.net/BottomRightimg.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-[15%] left-[6%] w-[66%]">
          <img
            src="https://d2tfnz5m7k1weq.cloudfront.net/Mudra1.svg"
            alt="Mudra"
            className="relative w-1/2 drop-shadow-md z-10 mb-2"
          />

          <div
            className="relative w-full aspect-auto flex items-center justify-start"
            style={{
              backgroundImage: `url(${subtext19})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              padding: '1.5% 2.5%',
            }}
          >
            <p className="text-black leading-tight uppercase tracking-tight" style={{
              fontSize: 'clamp(0.4rem, 1.2vw, 0.75rem)',
              fontFamily: 'ReadyForAnything, sans-serif',
              fontWeight: 'bold'
            }}>
              GRACE IN MOTION! EXPERIENCE THE ELEGANCE OF CLASSICAL DANCE FORMS!
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DanceContentLarge