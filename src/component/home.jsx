import React from "react";
import { Box, Typography, Link, colors } from "@mui/material";

function Home() {
  return (
    <div>
      {/* <h1 style={{ color: 'white' }}>Welcoming Lord Ganesha with joy and devotion</h1>
        <p style={{ color: 'white', fontWeight: 'bold' }}>Celebrating Culture, Faith & Community Since 1995</p> */}

      <Box style={{ color: "white", fontWeight: 'bold' }} sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Riddhi Siddhi Ganesh Foundation
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontStyle: "italic", mb: 3, color: "#FF6F00" }}
        >
          Celebrating Culture, Faith & Community Since 1995
        </Typography>

        <Typography variant="body1" gutterBottom>
          With deep devotion and boundless faith, Riddhi Siddhi Ganesh
          Foundation has been celebrating the divine presence of Lord Ganesha
          for over two decades. Our mission is to bring the community together
          through the vibrant celebration of Ganesh Chaturthi — blending
          tradition, creativity, and spirituality.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Every year, we welcome devotees from all walks of life to join us in
          this sacred journey filled with prayers, aartis, cultural
          performances, eco-friendly practices, and a sense of togetherness.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          May Lord Ganesha bless you with wisdom, prosperity, and good fortune.{" "}
          <br />
          Join us as we celebrate devotion with grandeur and grace.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
          🙏 गणपति बाप्पा मोरया! 🙏
        </Typography>
      </Box>
    </div>
  );
}

export default Home;
