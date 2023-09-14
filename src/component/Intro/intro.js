
import React from 'react'
import { Link } from 'react-scroll'
import {TfiNewWindow} from  'react-icons/tfi'
import {BiRightArrowAlt} from 'react-icons/bi'
import image from '../../assets/suresh.png'
import './intro.css'

const Intro = () => {

     

    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText' >I'am <span className='introName' >Suresh</span> </span>
                {/* <div>
                I' am <span className='role-animation'>{roles[currentRoleIndex]}</span>
                </div>  */}
                <p className='introPara'>I am a skilled MERN Stack Developer,I have Hands on experience in the field. 
                I specialize in front-end development and back-end development. 
                I am always looking to learn and grow as a developer. </p>
          <div>
          <Link> <button className='btn'>
            <TfiNewWindow className='btnImg'/> Hire Me
            </button></Link>

            <Link> <button className='btn'>
             Resume <BiRightArrowAlt/>
            </button></Link>
            </div>
            </div>
            <img src={image} alt='SURESH' className='bg' />
        </section>
    )
}
export default Intro