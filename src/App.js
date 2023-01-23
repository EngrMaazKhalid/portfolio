import Home from './components/Home/home';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import classes from './components/Home/home.module.css'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Animated from './components/Animated';
function App() {
 
  return (
   <BrowserRouter>
       <header className={classes['header']}>
            <ul className={classes['nav-bar']}>
<li className={classes['icons-list']} > <Link to='/'> <HomeRoundedIcon className={classes['btn']} sx={{fontSize:'3rem' , transform:'translateY(3px)'}} />  <h2 className={classes['btn-heading']}>Home</h2></Link></li>
<li className={classes['icons-list']}><Link to='/about'><PersonIcon className={classes['btn']} sx={{fontSize:'3rem'  , transform:'translateY(3px)'}}/> <h2 className={classes['btn-heading']}>About</h2></Link></li>
<li className={classes['icons-list']}><Link to='/portfolio'> <BusinessCenterIcon className={classes['btn']} sx={{fontSize:'3rem' , transform:'translateY(3px)'}}/> <h2 className={classes['btn-heading']}>Portfolio</h2></Link></li>
<li className={classes['icons-list']}><Link to='/contact'> <LocalPostOfficeIcon className={classes['btn']} sx={{fontSize:'3rem' , transform:'translateY(3px)'}}/> <h2 className={classes['btn-heading']}>Contact</h2></Link></li>
            </ul>
        </header>

     <Animated/>
      </BrowserRouter>
  );
}

export default App;
