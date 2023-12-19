import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import american from '../images/american.jpg'
import image from '../images/flower.jpg'
import blue from '../images/blue.jpg'
const Rightbar = () => {
  return (
    <Box flex={2} sx={{display: {xs: 'none', sm: 'block'}}} p={2}>
      <Box position={'fixed'} width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={american} />
          <Avatar alt="Travis Howard" src={image} />
          <Avatar alt="Cindy Baker" src={blue} />
          <Avatar alt="Agnes Walker" src={image} />
          <Avatar alt="Trevor Henderson" src={american} />
          <Avatar alt="Cindy Baker" src={blue} />
          <Avatar alt="Agnes Walker" src={image} />
          <Avatar alt="Trevor Henderson" src={american} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200}>
          Latest Photos
        </Typography>
        <ImageList cols={3}>
          <ImageListItem>
            <img
              // srcSet={`w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={image}
              alt="aa"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              // srcSet={`w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={image}
              alt="aa"
              loading="lazy"
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
              srcSet={`w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={image}
              alt="aa"
              loading="lazy"
            />
          </ImageListItem> */}
          <ImageListItem>
            <img
              // srcSet={`w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={image}
              alt="aa"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={200}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            // width: '100%',
            maxWidth: 360,
            height: 330,
            bgcolor: 'background.paper',
            overflow: 'auto',
            '&::-webkit-scrollbar': {display: 'none'},
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: 'inline'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: 'inline'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: 'inline'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: 'inline'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: 'inline'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
