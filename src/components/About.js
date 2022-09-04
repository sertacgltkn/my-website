import React from "react";
import iki from "../assets/iki.jpg";
import AboutLayout from "../layout/AboutLayout";
import Typography from "@mui/material/Typography";
import { LoremIpsum } from "react-lorem-ipsum";

function About() {
  return (
    <AboutLayout
      sx={{}}
      sxBackground={{
        backgroundImage: `url(${iki})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
        maxWidth: '202vh', maxHeight: '1000vh'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      {/*  <img
        style={{ display: 'none' }}
        src={about1}
        alt="increase priority"

      /> */}
      <Typography
        mt="auto"
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
      >
        <hr/>
        Lorem
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        <LoremIpsum/>
        <LoremIpsum avgWordsPerSentence={1} />
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        lorem İpsum
      </Typography>
    </AboutLayout>
  );
}
export default About;
