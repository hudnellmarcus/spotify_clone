import React from 'react';
import '../Footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
       <img className="footer_albumLogo" src="https://townsquare.media/site/11/files/2011/08/Usher-Yeah-Amazon-Music.jpg?w=600&h=0&zc=1&s=0&a=t&q=89" alt="" />
       <div className="footer_songInfo">
        <h4>YEAH!!!</h4>
        <p>Usher</p>
       </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineOutlinedIcon fontSize='large' className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Footer