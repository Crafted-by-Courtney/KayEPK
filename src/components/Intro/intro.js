import React from 'react'
import './intro.css';
import kiki1 from '../images/kiki1.png';
import btnImg from '../images/micr.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <>
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'><span>Kiki</span><br/></span> Music Artist
        </span>
        <p className='introPara'>I am a versatile, seasoned, music artist with a tapestry of experience in singing, songwriting, rapping, captivating live performances, playing piano, dance mastery, and choreographic brilliance.</p>
        <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'/> Hire Me</button></Link>
      </div>
      <img src={kiki1} alt="Profile" className='bg' />
    </section>
  </>
  
  )
}

export default Intro
