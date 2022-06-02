import { Link } from "react-router-dom";
import React from "react";

const Link7urtle = React.memo((props) => {
  return (
    <Link
      to={props.to ? props.to : props.page.path}
      title={props.description ? props.description : props.page.description}
    >
      {props.children ? props.children : props.page.title}
    </Link>
  );
});

export default Link7urtle;
