import {BiRightArrowAlt} from 'react-icons/bi'
import './work.css'

const Projects = () => {
    const onClickOpenPage = () => {
        const url = "https://kcharyprojects.ccbp.tech/"

        window.open(url, '_blank')
    }

    return (
        <section id="works">

            <h1 className='worksTitle'>My Portfolio</h1>
           <p className='worksDesc'> 
                Unlocking the limitless potential of web development, I am successfully crafted a trio of exceptional <a href='https://kcharyprojects.ccbp.tech/' target="_blank" rel="noreferrer">projects </a> that redefine the digital landscape. Through meticulous design and innovation, I have seamlessly blended the worlds of static elegance, 
                responsive versatility, and dynamic interactivity. These projects stand as a testament to my commitment to pushing the boundaries of web technology, 
                offering a seamless experience that adapts to needs. From the timeless charm of static web design to the adaptive responsiveness across devices and the captivating dynamism of interactive content, my creations encompass the full spectrum of web development excellence. 
                on this exciting journey as I was continue to shape the future of the digital world
            </p>

            <p className='worksDesc'>
                As a dedicated developer, I've embarked on a journey of continuous growth and innovation, 
                resulting in the creation of a diverse range of <a href='https://kcharyprojects.ccbp.tech/' target="_blank" rel="noreferrer">projects </a> that showcase my skills and passion for web development. 
                From crafting visually stunning static websites that captivate users, to ensuring seamless responsiveness across various devices, and finally, delivering dynamic, 
                interactive experiences that engage and delight, my portfolio represents a commitment to excellence in every aspect of web development. These <a href='https://kcharyprojects.ccbp.tech/' target="_blank" rel="noreferrer">projects </a> are not just websites; they are a testament to my dedication to 
                pushing the boundaries of what's possible in the digital realm, 
                and I'm excited to continue pushing those boundaries in the future.
            </p>
            <button type="button" className='workBtn' onClick={onClickOpenPage}>See My Projects<BiRightArrowAlt/></button>

        </section>

    )
}

export default Projects