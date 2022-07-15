import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Radio,
  Typography,
} from "@mui/material";
import coverImg from "../../static/cover.png";
import React from "react";
import { Form } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import SuqareImg from "../../static/suqare.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MenuButton from "../../components/Menu/DropDownMenu";

const useStyles = makeStyles((theme) => ({
  coverImag: {
    position: "static",
    width: "106%",
    height: "256px",
    overflow: "hidden",
    marginLeft: "-48px",
    [theme.breakpoints.down("md")]: {
      width: "126%",
    },
  },
  searchField: {
    position: "absolute",
    height: "50px",
    width: "848.77px",
    top: "120px",
  },
  searchIcon: {
    position: "absolute",
    top: "5px",
    color: "#C4C4C4",
    opacity: "0.5",
    marginLeft: "50px",
    [theme.breakpoints.down("sx")]: {
      marginLeft: "-10px",
    },
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: "240px",
      height: "220px",
    },
  },
  boxList: {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: "236.17px",
      height: "124.3px",
    },
  },
}));

export default function Library() {
  const classes = useStyles();

  const menu = [
    {
      element: <Radio checked size="small" />,
      title: "Weather",
      onClick: () => {},
    },
    {
      element: <Radio checked size="small" />,
      title: "Car Crash",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Fail",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Cute",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Timelaps",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Emotional",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Accidents",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Aminals",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Superb human",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Pranks",
      onClick: () => {},
    },
    {
      element: <Radio size="small" />,
      title: "Unavailible",
      onClick: () => {},
    },
  ];
  return (
    <Container maxWidth={false} sx={{ marginBottom: "10px" }}>
      {/* Header */}
      <header>
        <img className={classes.coverImag} src={coverImg} alt="cover" />

        <Grid container justifyContent="center" className={classes.searchField}>
          <Grid item xs={6}>
            <Form.Control style={{ width: "100%" }} />
            <div className={classes.searchIcon}>
              <SearchOutlinedIcon /> search
            </div>
          </Grid>
        </Grid>
      </header>
      <br />
      <Container maxWidth={"xl"}>
        {/* Categories  */}
        <Grid container spacing={3}>
          {/* Categories  Title*/}
          <Grid item container justifyContent="space-between">
            <Grid item ml={8}>
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Video categories
              </Typography>
            </Grid>
            <Grid item mr={8}>
              <MenuButton
                id="category-menu-box"
                text="View More Categories"
                MenuItems={menu}
                sx={{
                  width: { md: "100%", xs: "180px" },
                }}
              />
            </Grid>
          </Grid>
          {/* Categories List */}
          <Grid item container spacing={3}>
            {/* Big Box */}
            <Grid container item spacing={4} justifyContent={"center"}>
              <Grid item>
                <Box className={classes.box} component={Paper} elevation={5}>
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.box} component={Paper} elevation={5}>
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.box} component={Paper} elevation={5}>
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.box} component={Paper} elevation={5}>
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.box} component={Paper} elevation={5}>
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
            </Grid>
            {/* small Box */}
            <Grid container item spacing={4} justifyContent={"center"}>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item ml={8}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<VisibilityOutlinedIcon />}
            >
              View More
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ margin: "50px" }} />
        {/* Collections  */}
        <Grid container spacing={3}>
          <Grid item container justifyContent="space-between">
            {/* Collections  Title*/}
            <Grid item>
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Collections
              </Typography>
            </Grid>
          </Grid>
          {/* Collections List */}
          <Grid item container spacing={3}>
            {/*   Latest*/}
            <Grid container item spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h6"> Latest</Typography>
              </Grid>

              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<VisibilityOutlinedIcon />}
              >
                View More
              </Button>
            </Grid>
            {/*   Trending*/}
            <Grid container item spacing={4} >
              <Grid item xs={12}>
                <Typography variant="h6">Trending</Typography>
              </Grid>
            
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
              <Grid item>
                <Box
                  className={classes.boxList}
                  component={Paper}
                  elevation={3}
                  rounded
                >
                  <img src={SuqareImg} alt="img" />
                </Box>
                <br />
                <Typography variant="h6">Lol dsal sadk sakmsa</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<VisibilityOutlinedIcon />}
              >
                View More
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          sx={{ margin: "-10px", marginTop: "10px", marginBottom: "10px" }}
        />
      </Container>
    </Container>
  );
}
