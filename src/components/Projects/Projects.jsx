import './Projects.css'
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import cb from '../../assets/cb.png'
import tti from '../../assets/tti.png'
import br from '../../assets/br.png'
import ise from '../../assets/ise.png'
import Card from '../Card/Card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  useGSAP(() => {
    gsap.from('#para', {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '#para',
        scroll: 'body',
        scrub: 2,
        start: 'top 90%',
        end: 'top 40%'
      }
    })

    gsap.from('.slider', {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.slider',
        scroll: 'body',
        scrub: 2,
        start: 'top 90%',
        end: 'top 40%'
      }
    })
  })

  return (
    <div id='projects' className='container'>
      <h2 id='para'>2+ YEARS EXPERIENCE IN PROJECTS</h2>
      <div className="slider">
        <Card title='VIRTUAL ASSISTANT' image={va} />
        <Card title='AI POWERED FITNESS WEBSITE' image={fw} />
        <Card title='AI CHATBOT' image={cb} />
        <Card title='AI TEXT TO IMAGE' image={tti} />
        <Card title='AI BACKGROUND REMOVER' image={br} />
        <Card title='IMAGE SEARCH ENGINE' image={ise} />
      </div>
    </div>
  )
}

export default Projects