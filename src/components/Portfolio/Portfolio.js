import { requirePropFactory } from '@mui/material';
import React from 'react'
import classes from './portfolio.module.css'
const Portfolio = ()=>{
    return(<div id='portfolio'>
          <div className={classes['Title-sec']}>
            <h1 className={classes['Title-sec-h1']}> My Portfolio</h1>
            <span className={classes['Title-bg']}>Projects</span>
            </div>
            <section className={classes['main-section']}>
            <div className={classes['content']}>
                <div>
                    <ul className={classes['port-ul']}>
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
                        

                    </ul>
                </div>
            </div>
            </section>
        </div>
   )
}

export default Portfolio;