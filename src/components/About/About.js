import React from 'react'
import classes from './About.module.css'
import DownloadIcon from '@mui/icons-material/Download'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion'
// import { CircularProgress } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import School from '@mui/icons-material/School';
const About = () => {

  const data = [
    {
      id: '0',
      name: 'fname:',
      answer: 'Muhammad Maaz',
    }, {
      id: '01', name: 'lname:', answer: 'Khalid'
    }, {
      id: '02', name: 'age:', answer: '22'
    }, {
      id: '03', name: 'Nationality:', answer: 'Pakistan'
    },
    { id: '04', name: 'address:', answer: 'Islamabad' },
    { id: '05', name: 'freelance:', answer: 'Available' },
    { id: '06', name: 'phone:', answer: '+923315803936' },
    { id: '07', name: 'email:', answer: 'engrmaazkhalid@gmail.com' },
    { id: '08', name: 'linkedin:', answer: 'Muhammad Maaz Khalid' },
    { id: '09', name: 'language:', answer: 'English, Urdu' }

  ]



  return (<motion.div id='about'className={classes['about']} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.2 } }}>
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
                <div className={classes['img-fluid']} />
              </div>
              {/* {data.map(user=>{ */}
              <div className={classes['col-12']}>
                
                  <ul className={classes['about-list']}>
                  
                    <li className={classes['list']} > <span className={classes['title']}>First Name: </span>
                      <span className={classes['answer']}>Muhammad Maaz</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Last Name: </span>
                      <span className={classes['answer']}>Khalid</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Age: </span>
                      <span className={classes['answer']}>22</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Nationality: </span>
                      <span className={classes['answer']}>Pakistan</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Address: </span>
                      <span className={classes['answer']}>Islamabad</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Fiverr: </span>
                      <span className={classes['answer']}><a href='https://www.fiverr.com/engrmaazkhalid'>engrmaazkhalid</a></span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Phone: </span>
                      <span className={classes['answer']}>+923315803936</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Email: </span>
                      <span className={classes['answer']}>engrmaazkhalid@gmail.com</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>LinkedIn: </span>
                      <span className={classes['answer']}><a href='https://www.linkedin.com/in/muhammad-maaz-khalid-131a40247/'> Muhammad Maaz Khalid</a></span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Language: </span>
                      <span className={classes['answer']}>Urdu, English</span> 
                     </li>
                  </ul>

              </div>
              {/* })} */}
              <div className={classes['down-div']}>
                <a className={classes['button']} href={require('./Muhammad-Maaz-Khalid-resume.pdf')} download><span className={classes['button-text']}> Download</span>
                  <span className={classes['button-icon']}>
                    <DownloadIcon sx={{ fontSize: '3rem' }} />
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
              {/* <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    25
                  </h3>
                  <p className={classes['define-para']}>
                    Awards
                    <span className={classes['d-block']}>Won</span>
                  </p>
                </div>
              </div> */}
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
              <CircularProgress variant='determinate' value={80} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
              <CircularProgress variant='determinate' value={50} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
              <CircularProgress variant='determinate' value={55} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
              <CircularProgress className={classes['MuiCircularProgress-indeterminate']} variant='determinate' value={61} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
              <CircularProgress variant='determinate' value={75} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
              <CircularProgress variant='determinate' value={43} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
                <span className={classes['percentage']}> 43%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>UI/UX</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={57} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
                <span className={classes['percentage']}> 57%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>ReactNative</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={35} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
          <div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={80} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
<h6 className={classes['skill-name']}>Next.js</h6>
</div>
<div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={60} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
    <span className={classes['percentage']}> 60%</span>
  </Box>
</Box>
<h6 className={classes['skill-name']}>SQL</h6>
</div>
<div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={45} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
    <span className={classes['percentage']}> 45%</span>
  </Box>
</Box>
<h6 className={classes['skill-name']}>API Integration</h6>
</div>
<div className={classes['col-5']}>


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant='determinate' value={72} size={130} sx={{ color: '#0004ff', backgroundColor: '#252525', borderRadius: '50%' }} />
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
    <span className={classes['percentage']}> 72%</span>
  </Box>
</Box>
<h6 className={classes['skill-name']}>Tailwindcss</h6>
</div>


        </div>
        <hr className={classes['seperator']}></hr>
        <div className={classes['row']}>
          <div className={classes['col-12']}>
            <h3 className={classes['skill-title']}>Experience and Education</h3>
          </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
              <ul className={classes['resume-ul']}>
              <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2024-Present</span>
                  <h5 className={classes['degree-name']}>Web developer Intern
                    <span className={classes['place']}>Horizon Tech Service</span>
                  </h5>
                  <p className={classes['degree-para']}>  Serving as a Web developer Intern at Horizon Tech Service, where I have been responsible for developing and maintaining websites for clients. I have gained valuable experience in front-end development, and have worked on a variety of projects using HTML, CSS, React.js, Next.js, Mysql and JavaScript.
    </p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2023-2024</span>
                  <h5 className={classes['degree-name']}>Vice President
                    <span className={classes['place']}>Softdesk</span>
                  </h5>
                  <p className={classes['degree-para']}>  Serving as a Vice president of Softdesk which is a dynamic and leading tech society at the University of Engineering and Technology Taxila
    </p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2023-2024</span>
                  <h5 className={classes['degree-name']}>MLSA Alpha Ambassador
                    <span className={classes['place']}>Microsoft Learn Student Ambassador</span>
                  </h5>
                  <p className={classes['degree-para']}>  Representing Microsoft Learn, as an Alpha Ambassador in my university to promote technology education and skill development
    </p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2021-Present</span>
                  <h5 className={classes['degree-name']}>Web developer
                    <span className={classes['place']}>Fiverr</span>
                  </h5>
                  <p className={classes['degree-para']}>  Providing front-end web development services on fiverr since last 2 years. I work closely with clients to understand their needs and preferences, and strive to deliver high-quality websites that meet their requirements.
    </p>
                </li>
               
              </ul>
            </div>
          </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
              <ul className={classes['resume-ul']}>
              <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2020-2024</span>
                  <h5 className={classes['degree-name']}>Software Engineering
                    <span className={classes['place']}>UEt taxila</span>
                  </h5>
                  <p className={classes['degree-para']}> Passed Software Engineering degree from University of Engineering and Technology Taxila, Pakistan with 3.27CGPA</p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2018-2020</span>
                  <h5 className={classes['degree-name']}>Pre-Engineering
                    <span className={classes['place']}>Pgc</span>
                  </h5>
                  <p className={classes['degree-para']}>  Achieved top marks in FSC Pre-Engineering, with a 89%. Demonstrated strong work ethic and dedication to academic success</p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2017-2018</span>
                  <h5 className={classes['degree-name']}>matriculation
                    <span className={classes['place']}>Dar-e-Arqam high School</span>
                  </h5>
                  <p className={classes['degree-para']}>  I received an overall grade point average of 92%, which demonstrates my dedication to academic excellence and my ability to excel in a challenging curriculum. </p>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>

  </motion.div>)
}

export default About;