import React from 'react';
import { Grid } from '@material-ui/core';
import './JoinUsStyles.css';
import sponsor from '../../assets/company/sponsor.png';
import student from '../../assets/company/student.png';
const JoinUs = () => {
    return (
        <div className="joinus-container">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="joinus-txt-container">
                        <h1 className="joinus-heading">
                            Join us as Trainee
                        </h1>
                        <p className="joinus-txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti qui iusto veritatis facilis nisi quidem recusandae saepe dolore nesciunt, voluptatem quis? Accusamus ipsum possimus ratione ea illum, tempora architecto!
                            Quasi dolorem incidunt dignissimos quas obcaecati rem temporibus sequi, deleniti omnis quidem amet architecto. Totam dolor quas voluptatibus fuga facere, molestias ex voluptatum sunt modi omnis ad fugiat, repellendus cupiditate.
                            Distinctio doloremque quod, numquam sunt placeat laborum omnis ullam consequuntur ut excepturi saepe repellendus sapiente aspernatur? Magnam, tenetur fugiat.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={student} alt="sponsor" className='joinus-img' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <img src={sponsor} alt="sponsor" className='joinus-img' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <div className="joinus-txt-container-b">
                        <h1 className="joinus-heading-b">
                            Join us as a Trainer
                        </h1>
                        <p className="joinus-txt-b">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti qui iusto veritatis facilis nisi quidem recusandae saepe dolore nesciunt, voluptatem quis? Accusamus ipsum possimus ratione ea illum, tempora architecto!
                            Quasi dolorem incidunt dignissimos quas obcaecati rem temporibus sequi, deleniti omnis quidem amet architecto. Totam dolor quas voluptatibus fuga facere, molestias ex voluptatum sunt modi omnis ad fugiat, repellendus cupiditate.
                            Distinctio doloremque quod, numquam sunt placeat laborum omnis ullam consequuntur ut excepturi saepe repellendus sapiente aspernatur? Magnam, tenetur fugiat.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default JoinUs