import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__card">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum
            mollitia odit id culpa ad modi amet magni ducimus dolores obcaecati
            dolorum voluptatibus est beatae, natus voluptate aspernatur repellat
            tenetur.
          </p>

          <a href="#contact" className="btn btn-primary"> 
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;










/* import React from "react";
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
 */