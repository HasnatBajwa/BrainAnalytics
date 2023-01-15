import React from "react";
import { Grid } from "@material-ui/core";
import "./CoursesStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import digitalMarketing from '../../assets/Courses/digitalmarketing.png';
import graphicDesigning from '../../assets/Courses/graphic-designing.png';
import dataAnalysis from '../../assets/Courses/data-analysis.png';
import virtualAssitant from '../../assets/Courses/virtualassistant.png';
import webAndApp from '../../assets/Courses/webandapp.png';
import "swiper/swiper.min.css";

const Courses = () => {
  return (
    <div className="courses-container">
      <Grid container>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
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
            <div className="course-card">
              <img src={digitalMarketing} alt="courses" className="course-img" />
            </div>

          </SwiperSlide>
          <SwiperSlide>

            <div className="course-card">
              <img src={graphicDesigning} alt="courses" className="course-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="course-card">
              <img src={dataAnalysis} alt="courses" className="course-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="course-card">
              <img src={virtualAssitant} alt="courses" className="course-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div className="course-card">
              <img src={webAndApp} alt="courses" className="course-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </div>
  );
};

export default Courses;
