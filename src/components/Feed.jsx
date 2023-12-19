import {Favorite, FavoriteBorder, MoreVert, Share} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material'

import React, {useContext} from 'react'
import {FeedData} from '../constants/feeds'
import {AppContext} from '../ContextApi/Context'
// import {AppContext} from '../ContextApi/Context'

const Feed = () => {
  const {postTitle, setPostTitle} = useContext(AppContext)
  console.log('postsearch', postTitle)
  console.log(FeedData)
  return (
    <Box flex={4} p={2}>
      {/* ------------- */}
      {FeedData?.filter(feed => {
        if (postTitle?.postTitle === '') {
          return FeedData
        } else {
          return (
            feed.postTitle &&
            feed.postTitle?.toLowerCase()?.includes(postTitle?.toLowerCase())
          )
        }
      })?.map(data => (
        <Card key={data.id} sx={{margin: 5}}>
          <CardHeader
            avatar={
              <Avatar sx={{bgcolor: 'red'}} aria-label="recipe">
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={data?.title}
            subheader={data?.subheader}
          />
          <CardMedia
            component="img"
            height="15%"
            image={data?.imagemain}
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              variant="h6"
              sx={{fontSize: '12px', textTransform: 'uppercase'}}
              component="h6"
              color={'text.secondary'}
            >
              {data?.postTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{color: 'red'}} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export default Feed
