import React from "react";
import "./HomePage.css";
import ContentCoverIcon from "../static/ContentCoverIcon.png";
import partnersImage from "../static/partnersImage.png";
import { Button, Grid, Paper, Typography } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Box } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import MediaCard from "../components/Card";
const HomePage = () => {
  return (
    <div>
      <section className="showcase">
        <div className="video-container">
          <video autoPlay loop>
            <source src="https://www.wooglobe.com/images/bg-mgm-web.webm" />
            <source src="https://www.wooglobe.com/images/bg-mgm.mp4" />
            <source src="https://www.wooglobe.com/images/bg-mgm.mp4" />
          </video>
        </div>
        <Box sx={{ zIndex: 2, marginTop: { md: "100px", xs: "0px" } }}>
          <Box
            component="img"
            src={ContentCoverIcon}
            sx={{
              height: "auto",
              width: { sm: "450px", xs: "300px", md: "876px" },
            }}
            alt="No video"
          />

          <Paper className="contectText" elevation={0}>
            <Grid container spacing={6} justifyContent="center">
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    width: { md: "200px", xs: "none" },
                    height: { md: "50px", xs: "none" },
                    borderRadius: "22px",
                    fontWeight: "600",
                    backgroundColor: "#f5544d",
                  }}
                >
                  Submit Video
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={
                    <PlayArrowOutlinedIcon
                      style={{ fontSize: "34px", color: "#f5544d" }}
                    />
                  }
                  sx={{
                    width: { md: "200px", xs: "none" },
                    height: { md: "50px", xs: "none" },
                    borderRadius: "22px",
                  }}
                >
                  Library
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Box
            component="img"
            src={partnersImage}
            sx={{
              width: { md: 524, sm: 524, xs: "330px" },
              height: 97,
              marginTop: { xs: "100px", md: "auto" },
            }}
            alt="Parner Image"
          />
        </Box>
      </section>

      <section id="about">
        {/* XS */}
        <Typography variant="h5" align="left">
          We license video for every purpose
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          align="left"
          component={"div"}
        >
          Check out our creators’ content, collated for all occassions
        </Typography>
        <Carousel
          animation="animation"
          duration={800}
          sx={{ display: { md: "none", xs: "block" } }}
          navButtonsAlwaysInvisible
        >
          <Grid container justifyContent={"center"} spacing={1}>
            <Grid item>
              <MediaCard />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} spacing={1}>
            <Grid item>
              <MediaCard />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} spacing={1}>
            <Grid item>
              <MediaCard />
            </Grid>
          </Grid>
        </Carousel>

        {/* MD */}
        <Carousel
          animation="animation"
          duration={800}
          sx={{ display: { md: "block", xs: "none" } }}
          navButtonsAlwaysInvisible
        >
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item>
              <MediaCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
          </Grid>
        </Carousel>
      </section>
    </div>
  );
};

export default HomePage;
