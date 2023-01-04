import * as React from "react";
import { Grid, Modal } from "@material-ui/core";
import "./EnquiryStyles.css";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="enquiry-form-open-btn" onClick={handleOpen}>
        Enquiry
      </button>
      <Modal open={open} onClose={handleClose}>
        <div data-aos='fade-up' className="enquiry-container">
          <h2 className="enquiry-heading">Please Fill Out The Below Form</h2>
          <div className="std-data-container">
            <Grid container justifyContent="center">
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Course Interested</p>
                <input
                  type="text"
                  className="std-form"
                  placeholder="Enter Course Name"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Full Name</p>
                <input
                  type="text"
                  className="std-form"
                  placeholder="Enter Your Name"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Contact Number</p>
                <input
                  type="text"
                  className="std-form"
                  placeholder="+92-325-2724646"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Email</p>
                <input
                  type="text"
                  className="std-form"
                  placeholder="brainanalytics.pk@gmail.com"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Gender</p>
                <input type="radio" name="gender" value="male" />
                <span className="gender-txt">Male</span>
                <input type="radio" name="gender" value="female" />
                <span className="gender-txt">Female</span>
                <input type="radio" name="gender" value="other" />
                <span className="gender-txt">Other</span>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Last Qualification</p>
                <input type="text" className="std-form" placeholder="BSCS" />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Occupation</p>
                <input
                  type="text"
                  className="std-form"
                  placeholder="Software Engineer"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <p className="std-data-txt">Date of Birth</p>
                <input type="date" className="std-form" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <p className="questions">Questions/Suggestions</p>
                <input
                  type="text"
                  className="std-form-questions"
                  placeholder="Enter your questions or suggestions"
                />
              </Grid>

              <button className="std-btn-cancel" onClick={handleClose}>Cancel</button>
              <button className="std-btn-submit">Submit</button>
            </Grid>
          </div>
        </div>
      </Modal>
    </>
  );
}
