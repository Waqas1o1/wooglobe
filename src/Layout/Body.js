import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { ToastContainer } from "react-toastify";

export default function Body(props) {
  return (
    <Container maxWidth={false}>
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "auto", minWidth: "50%" }}
      /> */}
      <NavBar>{props.children}</NavBar>

      <Footer />
    </Container>
  );
}
