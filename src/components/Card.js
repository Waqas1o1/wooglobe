import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 1,
    borderRadius:'5px',
  },
  cardWrapper: {
    position: "absolute",
    top: "18px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#ffffff",
    fontWeight: 600,
    width: "151px",
    borderRadius: "5px",
    opacity: "0.8",
    backgroundColor: "#313131",
    height: "218px",
    zIndex: 1,
  },
  cardWrapperHover: {
    position: "absolute",
    color: "#ffffff",
    fontWeight: 600,
    top: "18px",
    width: "151px",
    borderRadius: "5px",
    opacity: "0.2",
    backgroundColor: "#313131",
    height: "218px",
    zIndex: 1,
  },
}));
export default function MediaCard() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    raised: false,
    shadow: 1,
  });

  return (
    <Card
      className={classes.root}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      sx={{ maxWidth: 150.3 }}
    >
      <CardMedia
        component="img"
        height="220"
        sx={{ width: "160px" }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWj9RzNOafD0W2iRGbeiJWqT_3L68vE_HoMw&usqp=CAU"
        alt="green iguana"
      />

      <div
        className={
          state.raised ? classes.cardWrapperHover : classes.cardWrapper
        }
      >
        Category
      </div>
    </Card>
  );
}
