import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add'
import styled from '@emotion/styled'
import ammad from '../images/ammad-profile.png'
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material'
export default function Add() {
  const [open, setOpen] = useState(false)
  const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  })
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: 'fixed',
          bottom: 25,
          left: {xs: 'calc(50%-25px)', md: 30},
        }}
        arrow
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          bgcolor={'background.default'}
          color={'text.primary'}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src={ammad} />
            <Typography fontWeight={500} sx={{marginTop: '5px'}} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{width: '100%'}}
            id="standard-helperText"
            placeholder="whats on your mind?"
            variant="standard"
          />
          <Stack direction="row" mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{width: '100px'}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}
