import Navbar from "./component/NavBar/navbar"
import Intro from './component/Intro/intro'
import Skills from "./component/Skills/skills"
import Projects from "./component/Works/work"
import Contact from "./component/Contact/contact"
import Footer from './component/Footer/footer'

import './App.css'


const App = () => {

    return (
        
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
           <Projects />
           <Contact />
           <Footer />
        </div>
       
    )
}

export default App