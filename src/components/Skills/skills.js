import React from 'react'
import './skills.css'
import kiki2 from '../images/kiki2.jpg'
import kiki3 from '../images/kiki3.jpg'
import kiki4 from '../images/kiki4.jpg'
import kiki5 from '../images/kiki5.jpg'
import kiki6 from '../images/kiki6.jpg'
import kiki9 from '../images/kiki9.jpg'
import { Link } from 'react-scroll';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>Kiki is an eclectic music artist with a unique blend of talents that captivate audiences around the world. Hailing from Detroit, Kiki's journey in the music industry began at a young age, fueled by a passion for creativity and self-expression.</span> 
        
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={kiki2} alt='kiki2' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>The Singer</h2>
                    <p>With a melodious voice that resonates with soulful vibes, Kiki's singing has the power to touch hearts and evoke emotions. As a prolific songwriter, Kiki's lyrics are a testament to the power of storytelling, often inspired by personal experiences and universal themes</p>
                </div> 
            </div>
            <div className='skillBar'>
                <img src={kiki3} alt='kiki3' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>The Rapper</h2>
                    <p>Kiki's dynamic rap skills bring an edgy and energetic flair to her music, setting the stage on fire with an unforgettable stage presence. She's performed at renowned venues across the nation, consistently leaving the crowd craving more</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={kiki4} alt='kiki4' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>The Pianist</h2>
                    <p>As a classically trained pianist, Kiki's music transcends genres and seamlessly combines classical elements with contemporary sounds. Her piano performances are a testament to her versatility and love for all things musical</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={kiki5} alt='kiki5' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>The Dancer</h2>
                    <p>Kiki's dance moves are electrifying, and her choreography adds a visually stunning dimension to her live performances. It's a spectacle that takes audiences on a journey through music and movement</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={kiki6} alt='kiki6' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>The Performer</h2>
                    <p>With a passion for pushing boundaries and challenging norms, Kiki is not just an artist; she's a visionary. Her music paints pictures, tells stories, and creates connections. She's more than just an artist; she's an experience</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={kiki9} alt='kiki9' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>The Lyricist</h2>
                    <p>Kiki's lyrical prowess and ability to craft melodies that resonate deeply showcase a rare and exceptional talent in the music industry.</p>
                </div>
            </div>
        </div>
        
        
    </section>
  );
}

export default Skills;
