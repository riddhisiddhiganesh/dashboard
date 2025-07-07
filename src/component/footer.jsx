import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "white",
        p: 2,
        mt: "auto",
        textAlign: "center",
      }}
      component="footer"
    >
      <Typography color="black" variant="body2">
        © {new Date().getFullYear()} Riddhi Siddhi Ganesh Foundation. All rights
        reserved.
        <br/>
        Designed with ❤️ by RSG Developers
      </Typography>
    </Box>
  );
}

export default Footer;
