import "../styles/about-styles.css";
import Marquee from "react-fast-marquee";
import { likes } from "../constants/index.js";
import { aboutMe } from "../constants";

const About = () => {
  return (
    <section id="About" className="container">
      <div className="general-header">About Me</div>
      <div className="box">
        <div className="text">
          <h1 className="my-name">
            Alex Shrestha |{" "}
            <a
              className="resume"
              href="../../Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>{" "}
          </h1>
          <p className="about-me"> {aboutMe} </p>
        </div>
        <div className="photo">
          <img src="../../icons/images/Lebron James.png" alt="Photo of Me" />
        </div>
        <Marquee speed={50} pauseOnHover>
          {likes.map((img, index) => (
            <div key={index} className="marquee-item">
              <img
                key={index}
                src={`../../icons/images/${img}.png`}
                alt={`${index}`}
                className="marquee-img"
              />
              <div className="image-caption">{img}</div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default About;