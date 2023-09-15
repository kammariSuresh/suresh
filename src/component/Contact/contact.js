import {useRef} from 'react';
import emailjs from '@emailjs/browser';

import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
// import {ImFacebook2} from 'react-icons/im'
import {VscGitPullRequestGoToChanges} from 'react-icons/vsc'
import './contact.css'



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    
        emailjs.sendForm('service_53qka06', 'template_er5l9ee', form.current, '5X5Omoq5_x9NejovE')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              alert("Email Sent")
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <p className="contactDesc">Please fill out the form below to discuss any work opportunities.</p>
                
                
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                     <input type="text"  className="name" placeholder="Your Name" name="user_name"/>
                     <input type="email" className="email" placeholder="Your Email" name='user_email'/>
                     <textarea name="message" rows="5" placeholder="Your Message" className="msg" ></textarea>
                     <button  type="submit" className="submitBtn" value="Send">Submit</button>
                </form>

                <div className='links' >
                        <a href='https://www.linkedin.com/in/kammarisuresh/'><BsLinkedin className='link'/></a>
                        <a href='https://github.com/kammariSuresh'><FaGithubSquare className='link'/></a>
                        <a href='https://kcharyprojects.ccbp.tech/' target="_blank" rel="noreferrer" ><VscGitPullRequestGoToChanges className='link'/></a>

                        {/* <a href='https://www.facebook.com/suresh.chary.16144/photos'><ImFacebook2 className='link'/></a> */}
                     </div>
            </div>
        </section>
    )
}

export default Contact