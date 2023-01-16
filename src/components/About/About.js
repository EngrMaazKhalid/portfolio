import React from 'react'
import classes from './About.module.css'
import DownloadIcon from '@mui/icons-material/Download'
// import { CircularProgress } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
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
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' value={80} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 80%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>html</h6>
    </div> 
<div className={classes['col-5']}>
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' value={50} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 50%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>javascript</h6>
    </div> 
<div className={classes['col-5']}>
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' value={55} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 55%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>react</h6>
    </div> 
<div className={classes['col-5']}>
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress className={classes['MuiCircularProgress-indeterminate']} variant='determinate' value={61} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 61%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>github</h6>
    </div> 
<div className={classes['col-5']}>
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' value={75} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 75%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>css</h6>
    </div> 
<div className={classes['col-5']}>
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' value={25} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 25%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>UI/UX</h6>
    </div> 
<div className={classes['col-5']}>
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' value={15} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 15%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>next.js</h6>
    </div> 
<div className={classes['col-5']}>
     
        
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' value={35} size={130} sx={{color:'#0004ff', backgroundColor: '#252525', borderRadius:'50%'}}/>
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={classes['percentage']}> 35%</span>
      </Box>
    </Box>
    <h6 className={classes['skill-name']}>c++</h6>
    </div> 
   
    

                </div>
            </div>
        </section>

    </div>)
}

export default About;