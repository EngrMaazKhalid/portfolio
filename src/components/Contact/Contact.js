import React from 'react'
import classes from './Contact.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = ()=>{
    return(<div>
        <div className={classes['Title-sec']}>
    <h1 className={classes['Title-sec-h1']}> Get in Touch</h1>
    <span className={classes['Title-bg']}>Contact</span>
    </div>
    <div className={classes['content']}>
    <div className={classes['row']}>
        <div className={classes['col-8']}>
            <h3 className={classes['custom-title']}>
                Contact me!
            </h3>
            <p className={classes['contac-para']}>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className={classes['information']}>
        
        <LocationOnIcon className={classes['icon']} />
        
        <p className={classes['info-para']}>
        <span className={classes['info-head']}>city</span>
            Islamabad, Pakistan
            </p>
            </div>
            <div className={classes['information']}>
        
        <MailIcon className={classes['icon']} />
        
        <p className={classes['info-para']}>
        <span className={classes['info-head']}>Email</span>
           engrmaazkhalid@gmail.com
            </p>
            </div>
            <div className={classes['information']}>
        
        <PhoneIcon className={classes['icon']} />
        
        <p className={classes['info-para']}>
        <span className={classes['info-head']}>call me</span>
            +92123456789
            </p>
            </div>
            <ul className={classes['social-ul']}>
                <li className={classes['social-li']}><FacebookRoundedIcon className={classes['social-icon']} sx={{fontSize:'4rem', transition:'all.2s'}}/></li>
                <li className={classes['social-li']}><TwitterIcon className={classes['social-icon']} sx={{fontSize:'4rem', transition:'all.2s'}}/></li>
                <li className={classes['social-li']}><InstagramIcon className={classes['social-iconIns']} sx={{fontSize:'4rem', transition:'all.2s'}}/></li>
                <li className={classes['social-li']}><LinkedInIcon className={classes['social-icon']} sx={{fontSize:'4rem', transition:'all.2s'}}/></li>
            </ul>
        </div>
        <div className={classes['form-sec']}>
            <form className={classes['contactform']}>
                <div className={classes['row']}>
                    <div className={classes['col-11']}>
                        <div className={classes['formgroup']}>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>)
}

export default Contact;