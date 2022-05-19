import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { NavData } from "../constants/NavData.js";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    display: "flex",
    margin: "12px 30px 0 30px",
    justifyContent: "space-between",
    // backgroundColor: "rgb(191,139,156)",
    // background: "linear-gradient(to bottom right, #ccffff 20%, #3399ff 100%)",
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: 64,
  },
  text: {
    float: "right",
    align: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14",
    fontWeight: "600",
  },
});

const NavbarCategories = () => {
  const classes = useStyle();
  return (
      <Link to="/product">
    <Box className={classes.component}>
      {NavData.map((data) => (
          <Box className={classes.container}>
            <img src={data.url} className={classes.image} alt="" />
            <Typography className={classes.text}>{data.text}</Typography>
          </Box>
      ))}
    </Box>
      </Link>
  );
};

export default NavbarCategories;
