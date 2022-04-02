import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { NavData } from "../constants/NavData.js";

const useStyle = makeStyles({
  component: {
    display: "flex",
    margin: "20px 13px 0 13px",
    justifyContent: "space-between",
    //backgroundColor: "rgb(191,139,156)",
    // background: "linear-gradient(to bottom right, #ccffff 20%, #3399ff 100%)",
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
  },
});

const NavbarCategories = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {NavData.map((data) => (
        <Box className={classes.container}>
          <img src={data.url} className={classes.image} alt="" />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavbarCategories;
