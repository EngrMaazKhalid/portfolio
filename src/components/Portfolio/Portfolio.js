import { Modal, Typography } from '@mui/material';
import React from 'react'
import classes from './portfolio.module.css'
import {motion} from 'framer-motion'
import { Box } from '@mui/system';
const Portfolio = ()=>{
   
    const data =[
        { id: '01',
        name:"Natours Project",
    img:require('./web1.png')},
        { id: '02',
        name:"Omnifood Project",
    img:require('./omni.png')},
        { id: '03',
        name:"Nexter Project",
    img:require('./nexter.png')},
        { id: '04',
        name:"Trillo Project",
    img:require('./trillo.png')},
        { id: '05',
        name:"Track Monthly Expenses",
    img:require('./react project 1.png')},
        { id: '06',
        name:"Train Ticketing Webapp",
    img:require('./train.png')},
    ]

    const [opens, setOpens] = React.useState(false);
 
    const handleOpen = () => {
     setOpens(true);
    };
  
    const handleClose = () => {
     setOpens(false);
    };
  
    // const [showData,setShowData] = useState('');
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
                        <li className={classes['port-li']} key={user.id} onClick={handleOpen}>
                            
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={user.img} />
                                <figcaption className={classes['caption']}>
                                    <h4>{user.name}</h4>
                                </figcaption>
                            </figure>
                        </li>
                        
                    ))}
            {/* <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {name}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                                </Modal> */}
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
                        

                    </ul>
                </div>
            </div>
            </section>
        </motion.div>
   )
}

export default Portfolio;