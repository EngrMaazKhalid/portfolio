import React from 'react'
import classes from './About.module.css'
import DownloadIcon from '@mui/icons-material/Download'
const About = ()=>{
    return(<div>
        <div className={classes['Title-sec']}>
            <h1 className={classes['Title-sec-h1']}> About ME</h1>
            <span className={classes['Title-bg']}>Resume</span>
        </div>
      
        <section className={classes['main-section']}>

            <div className={classes['content']}>
                <div className={classes['row1']}>
                    <div className={classes['col-div']}>
                    <div className={classes['row']}>
                        <div className={classes['col-12']}>
                            <h3 className={classes['personal']}>personal-infos</h3>
                        </div>
                        <div className={classes['col-13']}>
                            <img className={classes['img-fluid']} src={require('./maaz.jpeg')} />
                        </div>
                        <div className={classes['col-12']}>
                            <ul className={classes['about-list']}>
                                
                                <li className={classes['list']}> <span className={classes['title']}>First Name: </span>
                                 <span className={classes['answer']}>Muhammad Maaz</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>Last Name: </span>
                                 <span className={classes['answer']}>Khalid</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>Age: </span>
                                 <span className={classes['answer']}>20</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>Nationality: </span>
                                 <span className={classes['answer']}>Pakistan</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>Address: </span>
                                 <span className={classes['answer']}>Islamabad</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>FreeLance: </span>
                                 <span className={classes['answer']}>Available</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>Phone: </span>
                                 <span className={classes['answer']}>+923315803936</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>Email: </span>
                                 <span className={classes['answer']}>engrmaazkhalid@gmail.com</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>LinkedIn: </span>
                                 <span className={classes['answer']}>Muhammad Maaz Khalid</span>
                                </li>
                                <li className={classes['list']}> <span className={classes['title']}>Language: </span>
                                 <span className={classes['answer']}>Urdu, English</span>
                                </li>
                            </ul>

                        </div>
                        <div className={classes['down-div']}>
                             <a className={classes['button']}><span className={classes['button-text']}> Download</span>
                            <span className={classes['button-icon']}>
                             <DownloadIcon sx={{ fontSize:'3rem'}} />
                             </span>
                             </a>
                        </div>
                    </div>
                         </div>
                         <div className={classes['col-div2']}>
                            <div className={classes['row']}>
                                <div className={classes['col-6']}>
                                    <div className={classes['box-stats']}>
                                        <h3 className={classes['number']}>
                                            2
                                        </h3>
                                        <p className={classes['define-para']}>
                                            Years of 
                                            <span className={classes['d-block']}>Experience</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={classes['col-6']}>
                                    <div className={classes['box-stats']}>
                                        <h3 className={classes['number']}>
                                            20
                                        </h3>
                                        <p className={classes['define-para']}>
                                            Completed
                                            <span className={classes['d-block']}>projects</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={classes['col-6']}>
                                    <div className={classes['box-stats']}>
                                        <h3 className={classes['number']}>
                                            5
                                        </h3>
                                        <p className={classes['define-para']}>
                                             Happy 
                                            <span className={classes['d-block']}>Customers</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={classes['col-6']}>
                                    <div className={classes['box-stats']}>
                                        <h3 className={classes['number']}>
                                            25
                                        </h3>
                                        <p className={classes['define-para']}>
                                            Awards
                                            <span className={classes['d-block']}>Won</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                         </div>
                </div>
                <hr className={classes['seperator']}></hr>
                <div className={classes['row']}>
<div className={classes['col-12']}>
    <h3 className={classes['skill-title']}>My skills</h3>
</div>
<div className={classes['col-5']}>
{/* <span className={classes['title-timer']} data-from="0" data-to="85" data-speed="1800">85</span>
            <div className={classes["overlay"]}></div>
            <div className={classes["left"]}></div>
            <div className={classes["right"]}></div> */}
    <div className='c100'>
        <span>25%</span>
        <div className={classes['slice']}>
            <div className={classes['bar25']}></div>
            <div className={classes['fill']}></div>
        </div>
    </div>
</div>
                </div>
            </div>
        </section>

    </div>)
}

export default About;