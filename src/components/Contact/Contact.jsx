import './Contact.css'
import con from '../../assets/contact.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    useGSAP(() => {
    gsap.from('.contact-image', {
      y: -120,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.contact-image',
        scroll: 'body',
        scrub: 2,
        start: 'top 80%',
        end: 'top 30%'
      }
    })

    gsap.from('.contact-form', {
      y: -120,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.contact-form',
        scroll: 'body',
        scrub: 2,
        start: 'top 80%',
        end: 'top 30%'
      }
    })
  })
  
  return (
    <div id='contact' className='container'>
      <div className="contact-image">
        <img src={con} alt="" />
      </div>

      <div className="contact-form">
        <form action="#">
          <input type="text" placeholder='Type Your Name' />
          <input type="email" placeholder='Type your Email' />
          <textarea cols="30" rows="10" placeholder='Type your Message'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
