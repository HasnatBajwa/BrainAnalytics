import React from 'react';
import './TrainingStyles.css';
import CountUp, { useCountUp } from 'react-countup';
import { Grid } from '@material-ui/core';

const Trainings = () => {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 3000,
    });
    return (
        <div className="training-container">
            <Grid container>
                <Grid item xs={4} sm={4} md={4}>
                    <h1 className="training-heading">
                        Sucessfully Trained
                    </h1>
                    <h2 className="training-subheading">
                        <CountUp end={2750} enableScrollSpy /> <span>+</span>
                    </h2>
                    <h3 className="training-dec">Participants</h3>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <h1 className="training-heading">
                        Sucessfully Created
                    </h1>
                    <h2 className="training-subheading">
                        <CountUp end={150} enableScrollSpy /> <span>+</span>
                    </h2>
                    <h3 className="training-dec">Clients</h3>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <h1 className="training-heading">
                        Sucessfully Conducted
                    </h1>
                    <h2 className="training-subheading">
                        <CountUp end={100} enableScrollSpy /> <span>+</span>
                    </h2>
                    <h3 className="training-dec">Trainings</h3>
                </Grid>
            </Grid>
        </div>
    )
}

export default Trainings;