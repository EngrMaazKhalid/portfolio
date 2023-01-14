import React from 'react'
import classes from './home.module.css'

const Home = ()=>{

    return(
    <div id='home'>
       
        <div className={classes['tab-content']}>
        <div className={classes['tab-pane']}>
        <div className={classes['container']}> 
        <div className={classes['blue-shape']} />
        <div className={classes['home-main']}> 
        <div className={classes['dp-img']} /> 
        <div className={classes['descp-div']}> 
        <div className={classes['descp-part']}>
            <h1 className={classes['main-heading']}>
            &#8722;  I'm maaz khalid <br /><span>React developer</span>
            </h1>
        <p className={classes['para']}> I am a software engineer and front-end web developer creating user-friendly, responsive and clean websites & web-apps using react.js, html, css and javascript, I am a passionate web-developer who always want to learn new skills and to make life easy for the people around me</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>)
}

export default Home