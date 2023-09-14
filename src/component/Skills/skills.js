
import './skills.css'
import {MdDeveloperMode} from 'react-icons/md'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.png'
const Skills = () => {
    return (
        <section id ="skills">
            <h1 className='skillTitle'>About</h1>
            <p> I'm a skilled Web Developer passionate about turning concepts into captivating digital 
                experiences. My expertise spans frontend and backend technologies... </p>
            <div className='skillBars'>
                <div className='skillBar'>
                    <div className='imageContainer'>
                    <MdDeveloperMode className='skillBarImg'/>
                    </div>
                    
                    <div className='skillBarText'>
                        <h2 className='skillTitle'>Web Development</h2>
                        <p className='skillDesc'>My Web Development portfolio showcase my skills and passion. Explore my Projects, Skills, and experience to see how i create innovative web solutions. Let's connect make ideas to life!</p>
                    </div>
                </div>


                <div className='skillBar'>
                    <div className='imageContainer'>
                        <img src={frontend} alt="Img" className='skillBarImg'/>           
                    </div>
                    <div className='skillBarText'>
                        <h2 className='skillTitle'>Frontend Development</h2>
                        <p className='skillDesc'>Explore my frontend development portfolio to see how i craft captivating user interfaces and seamless user experiences.
                        Discover my projects and skills in HTML, CSS, JavaScript, and more...</p>
                    </div>
                </div>


                <div className='skillBar'>
                <div className='imageContainer'>
                <img src={backend} alt="Img" className='skillBarImg'/>
                    </div>
                    
                    <div className='skillBarText'>
                        <h2 className='skillTitle'>Backend Development</h2>
                        <p className='skillDesc'>My backend development portfolio higlights my expertise in server-side technologys, databases, and API development. 
                        Dive into my projects <a href='https://github.com/kammariSuresh/twitter-api.github.io' target='_blank' rel="noreferrer">"Github"</a> and skills to see how I power web applications from behiend the scenes.and skills in Python, SQL, Nodejs...</p>
                    </div>
                </div>


                
            </div>
        </section>
    )
}

export default Skills