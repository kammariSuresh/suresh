import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo.png'
// import DownloadButton from '../DownloadBtn'
import {TbDeviceMobileMessage} from 'react-icons/tb'
import {AiOutlineDownload} from 'react-icons/ai'
// import {FcAbout} from 'react-icons/fc'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const onClickgetElement = () => {
        document.getElementById("contact").scrollIntoView({behavioor: 'smooth'});
    }

    const onClickShowHide = () => {
        setShowMenu(!showMenu)
    }

    const onClickFalse = () => {
        setShowMenu(false)
    }

    return (
        
            <nav className="navbar">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100}  duration={500} ><img src={logo} alt="Suresh" className="logo"/></Link>
                <div className="desktopMenu">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" > Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" >About </Link>
                    
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" >Portfolio </Link>
                    <a href="resume.pdf" download="resumePdf.pdf" className="desktopMenuListItem">Resume <AiOutlineDownload/></a>
                    {/* <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" >Resume</Link> */}
                    {/* <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" >CV </Link> */}
                    {/* <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" >... </Link> */}
                </div>

                <button type="button" className="desktopMenuBtn" onClick={onClickgetElement}>
                    <TbDeviceMobileMessage className="desktopMenuImg"/> 
                    Contact Me
                </button>

                <BsFillMenuButtonWideFill className="mobMenu" onClick={onClickShowHide}/>
                <div className="navMenu" style={{display: showMenu? "flex":'none'}}>
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100}  duration={500} className="listItem" onClick={onClickFalse}> Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100}  duration={500} className="listItem" onClick={onClickFalse}>About </Link>
                    
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100}  duration={500} className="listItem" onClick={onClickFalse}>Portfolio </Link>
                    {/* <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" >Resume</Link> */}
                    {/* <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem" >CV </Link> */}
                    <a href="resume.pdf" download="resumePdf.pdf" className="listItem">Resume <AiOutlineDownload/> </a>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100}  duration={500} className="listItem" onClick={onClickFalse}>Contact</Link>
                </div>
            </nav>
        
    )
}

export default Navbar