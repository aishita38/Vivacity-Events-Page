import React from 'react'
import Events from './components/Events'

const App = () => {

  const danceCards = [
    {
      title: 'Street Dance',
      bg: 'https://d2tfnz5m7k1weq.cloudfront.net/TopLeftimg.webp',
      aspect: 'aspect-[558/355]',
      img: 'https://d2tfnz5m7k1weq.cloudfront.net/StreetDance1.svg',
      text: 'LET THE STREETS BEAR WITNESS TO ELECTRIFYING PERFORMANCES AND EXHILARATING BEATS. LET YOUR SPIRITS SOAR WITH STREET DANCE!'
    },
    {
      title: "Let's Tangle",
      bg: 'https://d2tfnz5m7k1weq.cloudfront.net/Mobdancediv.webp',
      aspect: 'aspect-[359/205]',
      img: 'https://d2tfnz5m7k1weq.cloudfront.net/LetsTangle1.svg',
      text: 'TWIST, SPIN, AND SHINE IN THIS ELECTRIFYING DANCE COMPETITION!'
    },
    {
      title: 'Tal Tarang',
      bg: 'https://d2tfnz5m7k1weq.cloudfront.net/TopLeftimg.webp',
      aspect: 'aspect-[558/355]',
      img: 'https://d2tfnz5m7k1weq.cloudfront.net/TalTarang1.svg',
      text: 'FEEL THE RHYTHM AND LET YOUR MELODIES COLLIDE IN THIS MUSICAL BATTLE!'
    },
    {
      title: 'Pump It Up',
      bg: 'https://d2tfnz5m7k1weq.cloudfront.net/Pump%20It%20Up.webp',
      aspect: 'aspect-[359/205]',
      img: 'https://d2tfnz5m7k1weq.cloudfront.net/PumpItUp1.svg',
      text: 'GET YOUR ENERGY ON AND PUMP UP THE EXCITEMENT WITH HIGH-OCTANE MOVES!'
    },
    {
      title: 'Razzmatazz',
      bg: 'https://d2tfnz5m7k1weq.cloudfront.net/MiddleLeftimg.webp',
      aspect: 'aspect-[631/355]',
      img: 'https://d2tfnz5m7k1weq.cloudfront.net/Razzmatazz1.svg',
      text: 'LIGHTS, CAMERA, SPARKLE! BRING THE GLAMOUR AND DAZZLE TO THE STAGE!'
    },
    {
      title: 'Mudra',
      bg: 'https://d2tfnz5m7k1weq.cloudfront.net/BottomRightimg.webp',
      aspect: 'aspect-[611/354]',
      img: 'https://d2tfnz5m7k1weq.cloudfront.net/Mudra1.svg',
      text: 'GRACE IN MOTION! EXPERIENCE THE ELEGANCE OF CLASSICAL DANCE FORMS!'
    }
  ]

  return <Events danceCards = {danceCards}/>
}

export default App
