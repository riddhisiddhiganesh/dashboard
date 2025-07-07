import React from 'react';
import { Box, Typography, Link, colors } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography style={{color: 'white'}} variant="h5" gutterBottom>📞 Contact Us</Typography>

      <Typography style={{color: 'white'}} gutterBottom>
        We welcome your questions, feedback, and participation! Whether you're a devotee, volunteer, sponsor, or visitor, feel free to reach out to us.
      </Typography>

      <Typography style={{color: 'white'}}><strong>📍 Address:</strong><br />
        Riddhi Siddhi Ganesh Foundation<br />
        Old Indire Colony<br />
        Burhanpur, Madhya Pradesh - 450331<br />
        India
      </Typography>

      <Typography style={{color: 'white'}} sx={{ mt: 2 }}>
        <strong>📧 Email:</strong> riddhisiddhiganeshfoundation@gmail.com
      </Typography>

      <Typography style={{color: 'white'}}>
        <strong>📱 Phone / WhatsApp:</strong> +91-7415880717
      </Typography>

      <Typography style={{color: 'white'}}>
        <strong>🕒 Timings:</strong> Mon–Sat: 10:00 AM to 7:00 PM
      </Typography>

      <Typography style={{color: 'white'}} sx={{ mt: 2 }}>
        <strong>📲 Follow Us:</strong><br />
        Instagram: <Link href="https://instagram.com/riddhisiddhiganeshfoundation" target="_blank">riddhisiddhiganesh</Link><br />
        {/* Facebook: <Link href="https://facebook.com/riddhisiddhiganesh" target="_blank">riddhisiddhiganesh</Link><br /> */}
        YouTube: <Link href="https://youtube.com/@riddhisiddhiganeshfoundation" target="_blank">@riddhisiddhiganesh</Link>
      </Typography>

      <Typography style={{color: 'white'}} sx={{ mt: 3 }}><em>🙏 Let us stay connected in devotion and service to Lord Ganesha.</em></Typography>
    </Box>
  );
}

export default Contact;
