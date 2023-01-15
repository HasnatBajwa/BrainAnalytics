import React from 'react';
import { Grid } from '@material-ui/core';
import './TrendingCourseStyles.css';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { IoMdAnalytics } from 'react-icons/io';
import { TbBusinessplan } from 'react-icons/tb';
import { MdDeveloperMode } from 'react-icons/md';
import { SiMarketo } from 'react-icons/si';
const TrendingCourse = () => {
    return (
        <div className="trending-course-container">
            <Grid container>
                <Grid item xs={4} sm={4} md={4}>
                    <div className="course-material-card">
                        <IoMdAnalytics className='course-icon'/>
                        <h2 className="course-h">
                            Digital Marketing
                        </h2>
                        <p className="course-q">
                            4 Courses
                        </p>
                    </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <div className="course-material-card">
                    <SiMarketo className='course-icon'/>
                    <h2 className="course-h">
                            Data Analysis
                        </h2>
                        <p className="course-q">
                            2 Courses
                        </p>
                    </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <div className="course-material-card">
                    <TbBusinessplan className='course-icon'/>
                    <h2 className="course-h">
                           Virtual Assitant
                        </h2>
                        <p className="course-q">
                            2 Courses
                        </p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <div className="course-material-card">
                    <AiOutlineAntDesign className='course-icon'/>
                    <h2 className="course-h">
                            Graphic Designing
                        </h2>
                        <p className="course-q">
                            3 Courses
                        </p>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <div className="course-material-card">
                    <MdDeveloperMode className='course-icon'/>
                    <h2 className="course-h">
                            Web and Mobile App development
                        </h2>
                        <p className="course-q">
                            3 Courses
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default TrendingCourse