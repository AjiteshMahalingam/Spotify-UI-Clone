import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className='footer__album-logo'
                    src="https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3" alt="Album cover" />
                <div className="footer__song-info">
                    <h4>Title</h4>
                    <p>Singer</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs >
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer