import React from 'react'
import classes from './home.module.css'
import {motion} from 'framer-motion'
const Home = ()=>{

    return(
    <motion.div id='home' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{ duration: 0.2}}}>
       
        <div className={classes['tab-content']}>
        <div className={classes['tab-pane']}>
        <div className={classes['container']}> 
        <div className={classes['blue-shape']} />
        <div className={classes['home-main']}> 
     
        <div className={classes['dp-img']} /> 
        <div className={classes['descp-div']}> 
        <div className={classes['descp-part']}>
            <div className={classes['small-dp']} />
            <h1 className={classes['main-heading']}>
            &#8722;  I'm maaz khalid <br /><span>Software Engineer</span>
            </h1>
        <p className={classes['para']}> I am a software engineer specializing in frontend web development with expertise in HTML5, CSS3, JavaScript, React.js, Next.js, and Material UI. I am experienced in building responsive and cross-browser compatible applications, with a focus on clean code and user-friendly design. Additionally, I have hands-on experience with React Native, Nativewind, and Firebase for mobile and web development.</p>
        {/* I am a software engineering student with a focus on front-end web development. I have a strong understanding of HTML, CSS, JavaScript, MaterialUI and React.js and have been working on several projects that showcase my skills. I am always eager to take on new projects and challenges, and I am confident that my skills and experience make me an excellent fit for any front-end web development project. I hope you find my portfolio website informative and engaging, and I look forward to hearing from you about any potential projects you may have. */}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </motion.div>)
}

export default Home