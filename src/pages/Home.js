import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import googleIcon from '../assets/images/google-logo-9834.png'
import Search from '../components/Search';

const Home = () => {
  return (
    <div className='home'>

      <div className='home_header'>
        <div className='home_headerLeft'>
          {/* Link */}
          <Link to="/about">About</Link>

          {/* Link */}
          <Link to="/store">Store</Link>
        </div>
        <div className='home_headerRight'>
          {/* Link */}
          <Link to="/gmail">Gmail</Link>
          {/* Link */}
          <Link to="/images">Images</Link>
          {/* Icon */}
          <AppsIcon />
          {/* Avatar */}
          <AccountCircleIcon />
        </div>
      </div>

      <div className='home_body'>
        <img src={googleIcon} alt="" />

        <div className='home_inputContainer'>
          <Search />
        </div>

      </div>

    </div>
  )
}

export default Home