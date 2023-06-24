import React from 'react';
import "./Footer.css";
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import { Grid,Slider } from '@mui/material';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';



function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
            <img src="https://i.scdn.co/image/ab67616d00001e022842f743ebd32235bceb43d3"
            alt="" className="footer__albumLogo"/>
            <div className="footer__songInfo">
                <h4>abcdefu</h4>
                <p>GAYLE</p>
            </div>
            </div>
            <div className="footer__center">
                <ShuffleOutlinedIcon className="footer__green" />
                <SkipPreviousOutlinedIcon className="footer__icon" />
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon" />
                <SkipNextOutlinedIcon className="footer__icon" />
                <LoopOutlinedIcon className="footer__green" />

            </div>
            <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayOutlinedIcon />
                </Grid>
                <Grid item>
                    <VolumeDownOutlinedIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>

            </div>
        </div>
    );
}

export default Footer;
