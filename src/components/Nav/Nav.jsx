import { useRef } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Nav = () => {
  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from('nav h1', {
      y: -100,
      duration: 1,
      opacity: 0
    })

    tl.from('nav .hamburger', {
      y: -100,
      duration: 0.5,
      opacity: 0
    })

    tl.from('nav ul li', {
      y: -100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2
    })
  })

  const toggleMenu = useRef()
  const hamburher = useRef()

  const toggle = () => {
    toggleMenu.current.classList.toggle('menu')
    hamburher.current.classList.toggle('activeham')
  }

  return (
    <nav>
      <div className="container">
        <h1>PORTFOLIO</h1>
        <ul ref={toggleMenu}>
          <li><Link to='home' smooth={true} duration={500} activeClass='active' spy={true} onClick={toggle}>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500} activeClass='active' spy={true} onClick={toggle}>About</Link></li>
          <li><Link to='projects' smooth={true} duration={500} activeClass='active' spy={true} onClick={toggle}>Projects</Link></li>
          <li><Link to='contact' smooth={true} duration={500} activeClass='active' spy={true} onClick={toggle}>Contact</Link></li>
        </ul>

        <div className="hamburger" ref={hamburher} onClick={toggle}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
      </div>
    </nav >
  )
}

export default Nav
