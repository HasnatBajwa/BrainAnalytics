import React from 'react';
import { Grid } from '@material-ui/core';
import training1 from '../../assets/Gallery/01.jpeg';
import training2 from '../../assets/Gallery/02.jpeg';
import training3 from '../../assets/Gallery/04.jpeg';
import training4 from '../../assets/Gallery/05.jpeg';
import training6 from '../../assets/Gallery/07.jpeg';
import training8 from '../../assets/Gallery/10.jpeg';
import training9 from '../../assets/Gallery/11.jpg';
import training10 from '../../assets/Gallery/12.jpeg';
import training11 from '../../assets/Gallery/13.jpg';
import training12 from '../../assets/Gallery/14.jpg';
import training13 from '../../assets/Gallery/15.jpg';
import training14 from '../../assets/Gallery/16.jpg';
import training15 from '../../assets/Gallery/17.JPG';
import training16 from '../../assets/Gallery/18.JPG';
import training17 from '../../assets/Gallery/19.JPG';
import training18 from '../../assets/Gallery/20.JPG';
import "./GalleryStyles.css";

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h1 className="gallery-heading">
                Gallery
            </h1>
            <Grid data-aos='fade-up' container>
               
                    <Grid item xs={4} sm={4} md={3}><img src={training1} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training2} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training3} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training4} alt="training-images" className='training-img' /></Grid>
                
            </Grid>
            <Grid container data-aos='fade-up'>
               
                    <Grid item xs={4} sm={4} md={3}><img src={training18} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training6} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training8} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training9} alt="training-images" className='training-img' /></Grid>
                
            </Grid>
            <Grid container data-aos='fade-up'>
               
                    <Grid item xs={4} sm={4} md={3}><img src={training10} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training11} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training12} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training13} alt="training-images" className='training-img' /></Grid>
                
            </Grid>
            <Grid container data-aos='fade-up'>
               
                    <Grid item xs={4} sm={4} md={3}><img src={training14} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training15} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training16} alt="training-images" className='training-img' /></Grid>
                    <Grid item xs={4} sm={4} md={3}><img src={training17} alt="training-images" className='training-img' /></Grid>
                
            </Grid>
        </div>
    )
}

export default Gallery