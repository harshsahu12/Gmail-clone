import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut()
    .then(() => {
      dispatch(logout());
    })
  }

  return (
    <div className='header'>
      <div className="header_left">
        <IconButton>
        <MenuIcon />
        </IconButton>
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" 
        alt="" />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder="Search Email" />
        <ArrowDropDown className="header_inputCard" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar style={{cursor: 'pointer'}} src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  )
}

export default Header
