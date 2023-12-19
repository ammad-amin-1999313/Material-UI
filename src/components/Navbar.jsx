import styled from '@emotion/styled'
import {Mail, Notifications, Pets} from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Input,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import image from '../images/ammad-profile.png'
import React, {useContext, useState} from 'react'
import {AppContext} from '../ContextApi/Context'
import {useLocation} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase/Fire'
import {useNavigate} from 'react-router-dom'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')({
  backgroundColor: 'white',
  padding: '0 10px',
  width: '40%',
})
const Icons = styled(Box)({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
})
const UserIcon = styled(Box)({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
})

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const {postTitle, setPostTitle} = useContext(AppContext)
  console.log(postTitle)
  const location = useLocation()
  const UserEmail = location.state && location.state.userEmail
  console.log('email', UserEmail)
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        console.log('Log Out Successfully ')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs: 'none', sm: 'block'}}}>
          {UserEmail ? `Hello ${UserEmail}` : 'Hello User'}
        </Typography>
        <Pets sx={{display: {xs: 'block', sm: 'none'}}} />
        <Search>
          <Input
            value={postTitle.postTitle}
            onChange={e => setPostTitle(e.target.value)}
            sx={{width: '100%', border: 'none', outline: 'none'}}
            placeholder="Search..."
          />
        </Search>
        <Icons sx={{display: {xs: 'none', sm: 'flex'}}}>
          <Badge badgeContent={4}>
            <Mail />
          </Badge>
          <Badge>
            <Notifications />
          </Badge>
          <Badge onClick={() => handleMenu()}>
            <Avatar sx={{width: '30px', height: '30px'}} src={image} />
          </Badge>
        </Icons>
        <UserIcon sx={{display: {xs: 'flex', sm: 'none'}}}>
          <Badge>
            <Avatar
              onClick={() => handleMenu()}
              sx={{width: '30px', height: '30px'}}
              src={image}
            />
          </Badge>
          <Typography sx={{color: 'lightgreen'}}>John Doe</Typography>
        </UserIcon>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
