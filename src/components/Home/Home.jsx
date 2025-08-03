import './Home.css'
import man from '../../assets/man.png'
import Typewriter from '../../Typewriter.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  useGSAP(() => {
    const tl1 = gsap.timeline()

    gsap.from('.homeimage img', {
      x: 200,
      duration: 1,
      delay: 2,
      opacity: 0
    })
    
    tl1.from('.info', {
      x: -80,
      duration: 1,
      delay: 2,
      opacity: 0
    })

    tl1.from('.line1', {
      y: 80,
      duration: 0.5,
      opacity: 0
    })

    tl1.from('.line2', {
      y: 80,
      duration: 0.5,
      opacity: 0
    })

    tl1.from('.line3', {
      y: 80,
      duration: 0.5,
      opacity: 0
    })
  })
  
  return (
    <div id='home' className='container'>
      <div className='info'>
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">QASIM SHAH</div>
          <div className="line3">
            <Typewriter
              words={['WEB DEVELOPER', 'SOFTWARE DEVELOPER', 'EDITOR']}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
              cursor='|'
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>

      <div className="homeimage">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
