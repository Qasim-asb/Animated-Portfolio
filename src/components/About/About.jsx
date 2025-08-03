import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
    gsap.from('.circle', {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.circle',
        scroll: 'body',
        scrub: 2,
        start: 'top 90%',
        end: 'top 40%'
      }
    })

    gsap.from('.line', {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.line',
        scroll: 'body',
        scrub: 2,
        start: 'top 80%',
        end: 'top 30%'
      }
    })

    gsap.from('.about-detail h2', {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.about-detail h2',
        scroll: 'body',
        scrub: 2,
        start: 'top 90%',
        end: 'top 40%'
      }
    })
    
    gsap.from('.about-detail ul', {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.about-detail ul',
        scroll: 'body',
        scrub: 2,
        start: 'top 80%',
        end: 'top 30%'
      }
    })
  })
  
  return (
    <div id='about' className='container'>
      <div>
        <div className="about-details">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="about-detail">
            <h2>Personal Info</h2>
            <ul>
              <li><span>NAME</span> : QASIM SHAH</li>
              <li><span>AGE</span> : 35 YEARS</li>
              <li><span>GENDER</span> : MALE</li>
              <li><span>LANGUAGE</span> : URDU, ENGLISH</li>
            </ul>
          </div>
        </div>

        <div className="about-details">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="about-detail">
            <h2>EDUCATION</h2>
            <ul>
              <li><span>DEGREE</span> : B-Tech</li>
              <li><span>BRANCH</span> : IT</li>
              <li><span>CGPA</span> : 8.4</li>
            </ul>
          </div>
        </div>

        <div className="about-details">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="about-detail">
            <h2>SKILLS</h2>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>DSA</li>
              <li>JAVA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-cards">
        <Card title='MERN STACK WEB DEVELOPER' image={mern} />
        <Card title='JAVA DEVELOPER' image={java} />
        <Card title='DSA' image={dsa} />
      </div>
    </div>
  )
}

export default About
