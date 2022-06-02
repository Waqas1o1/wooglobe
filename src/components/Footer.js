import React from "react";
import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import Wooglobe from "../static/WooglobeBlack.png";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer>
      <Paper
        sx={{
          height: "500px",
          padding: { xs: "0px", md: "100px" },
          overflow: "hidden",
        }}
        elevation={3}
      >
        <Grid container spacing={8}>
          <Grid sx={{ display: { xs: "none", md: "flex" } }} item>
            <img width={208} height={47} src={Wooglobe} alt="wooglobe" />
          </Grid>
          <Grid item>
            <table>
              <thead>
                <tr>
                  <th>For buyers</th>
                  <th>FOR CONTRIBUTORS</th>
                  <th>COMPANY</th>
                  <th>LEGAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BUY FROM WOOGLOBE</td>
                  <td>EARN WITH WOOGLOBE</td>
                  <td>ADBOUT</td>
                  <td>PRIVACY POLICY</td>
                </tr>
                <tr>
                  <td>GET STARTED </td>
                  <td>UPLOAD</td>
                  <td>TEAM</td>
                  <td>TERMS OF SERVICES</td>
                </tr>
                <tr>
                  <td>TRENDING VIDEO</td>
                  <td>INSPIRATIONS</td>
                  <td>CAREERS</td>
                  <td>EDITORIAL LICENSING T&CS</td>
                </tr>
                <tr>
                  <td>STAFF PICKS</td>
                  <td>FAQS</td>
                  <td>PRESS</td>
                  <td>PRODUCT LICENSING</td>
                </tr>
                <tr>
                  <td>BUY BLOG</td>
                  <td>YOUTUBE PROGRAME</td>
                  <td>CONTACT US</td>
                </tr>
                <tr>
                  <td></td>
                  <td>COMMUNITY</td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item container>
            <Grid item xs={12}>
              <Divider
                variant="middle"
                sx={{ color: "black", height: "2px" }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="body1">contact@wooglobe.com</Typography>
            </Grid>
            {/* Icons */}
            <Grid item>
              <IconButton>
                <YouTubeIcon sx={{ color: "#FF0000" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{
                  color:"#bc318f",
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={{ color: "#4267B2" }}>
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={{ color: "#406da2" }}>
                <TwitterIcon />
              </IconButton>
            </Grid>

            <Grid item container>
              <Typography variant="caption">
                © 2022 Wooglobe Limited. All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </footer>
  );
}
