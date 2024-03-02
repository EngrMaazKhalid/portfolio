import { getAccordionDetailsUtilityClass, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import classes from './portfolio.module.css'
import {motion} from 'framer-motion'
import { Box } from '@mui/system';
import ModalArea from './ModalArea';
const Portfolio = ()=>{
    const data =[
        { id: '07',
        name:"Softdesk Website",
        img:require('./softdesk.png'),
        src:'"Softdesk is student technical society of university of engineering and technology taxila. This website has been created using tailwind.css, next.js, materialUI and simple css"'},
        { id: '08',
        name:"MLSA UET Website",
        img:require('./mlsa.png'),
        src:'"Website for Microsoft learn Student Ambassador Uet Taxila chapter. This website has been created using next.js, materialUI and simple css "'},
        { id: '08',
        name:"Cold case website",
        img:require('./cold.png'),
        src:'"Its a project delivered on fiverr, simple html, javascript and css is used in this project"'},
        { id: '09',
        name:"Virtual Assistant Portfolio website",
        img:require('./va.png'),
        src:'"Portfolio website for vitual assistant, this website is developed using react.js, swiper.js, materialUI and css"'},
        { id: '01',
        name:"Natours Project",
        img:require('./web1.png'),
        src:'"Its a tour agency website having beautiful section like review, packages, contact us made up of html, sass and javascript."'},
        { id: '02',
        name:"Omnifood Project",
        img:require('./omni.png'),
        src:'"This website is design for a resturant having menu, review, delivery order sections init. Simple html and css is used in this project."'},
        { id: '03',
        name:"Nexter Project",
        img:require('./nexter.png'),
        src:'"This is a real state website in made up of advance css(sass) and html."'},
        { id: '04',
        name:"Trillo Project",
        img:require('./trillo.png'),
        src:'"A website of hotel chain where you can avail different packages and other information about hotel.It is made up of pure css, javascript and HTML."'},
        { id: '05',
        name:"Track Monthly Expenses",
        img:require('./react project 1.png'),
        src:'"This web app help user to track his monthly expenditure using graph. React.js, css is used to make this webapp."'},
        { id: '06',
        name:"Train Ticketing Webapp",
        img:require('./train.png'),
        src: '"Its a train ticketing webapp where you can book tickets of different apps. React.js, css and materialui is used in this webapp."'},
    ]
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

      const [tempdata, setTempData] = useState([]);


      const getData =(id, name, src, img)=>{
        let temp= [id, name, src, img];
        console.log(temp)
        setTempData(user =>[1, ...temp]);

        return handleOpen();
      }
   

    

    return(<motion.div id='portfolio' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{ duration: 0.2}}}>
          <div className={classes['Title-sec']}>
            <h1 className={classes['Title-sec-h1']}> My Portfolio</h1>
            <span className={classes['Title-bg']}>Projects</span>
            </div>
            <section className={classes['main-section']}>
            <div className={classes['content']}>
                <div>
                    <ul className={classes['port-ul']}>
                    {data.map(user =>(
                        <li className={classes['port-li']}  key={user.id} onClick={()=>getData(user.id, user.name, user.img, user.src)} >
                            <figure className={classes['port-figure']} >
                           
                                <img className={classes['port-img']} src={user.img} />
                                <figcaption  className={classes['caption']}>
                                    <h4>{user.name}</h4>
                                
                                </figcaption>
                                                            

                            </figure>
                        </li>
                        
                    ))}
                    </ul>
                </div>
            </div>
            </section>
            <ModalArea open={open} name={tempdata[2]} src={tempdata[4]} img={tempdata[3]} onClose={handleClose}  />
        </motion.div>
   )
}

export default Portfolio;
{/* <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li> */}