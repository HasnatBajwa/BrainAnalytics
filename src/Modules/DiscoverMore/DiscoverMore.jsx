import React from 'react';
import './DiscoverMoreStyles.css';
import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom'
import "swiper/swiper.min.css";

const DiscoverMore = () => {
    return (
        <div className="discover-container">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className='text-slider'>
                    <div className="slide-txt">
                        <h2 className='discover-head'>
                            Discover More
                        </h2>
                        <h1 className="discover-heading">
                            Why We Are The Best?
                        </h1>
                        {/* Slider Start */}
                        <div className="slider-container">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="discover-card">
                                        <h3 className="card-heading">
                                            A Student can perform his/her level best
                                        </h3>
                                        <p className="card-txt">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Placeat beatae expedita nulla amet libero eaque quos,
                                            atque, minus qui deserunt reprehenderit quia maiores commodi reiciendis consequatur ea rem.
                                            Molestiae, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Placeat beatae expedita nulla amet libero eaque quos,
                                            atque, minus qui deserunt reprehenderit quia maiores commodi reiciendis consequatur ea rem.
                                            Molestiae, laboriosam.
                                        </p>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="discover-card">
                                        <h3 className="card-heading">
                                            A Student can perform his/her level best
                                        </h3>
                                        <p className="card-txt">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Placeat beatae expedita nulla amet libero eaque quos,
                                            atque, minus qui deserunt reprehenderit quia maiores commodi reiciendis consequatur ea rem.
                                            Molestiae, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Placeat beatae expedita nulla amet libero eaque quos,
                                            atque, minus qui deserunt reprehenderit quia maiores commodi reiciendis consequatur ea rem.
                                            Molestiae, laboriosam.
                                        </p>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="discover-card">
                                        <h3 className="card-heading">
                                            A Student can perform his/her level best
                                        </h3>
                                        <p className="card-txt">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Placeat beatae expedita nulla amet libero eaque quos,
                                            atque, minus qui deserunt reprehenderit quia maiores commodi reiciendis consequatur ea rem.
                                            Molestiae, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Placeat beatae expedita nulla amet libero eaque quos,
                                            atque, minus qui deserunt reprehenderit quia maiores commodi reiciendis consequatur ea rem.
                                            Molestiae, laboriosam.
                                        </p>
                                    </div>

                                </SwiperSlide>
                            </Swiper>
                            <Link to='/About'><button className="course-btn">View Courses</button></Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default DiscoverMore