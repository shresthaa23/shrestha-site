import "../styles/about-styles.css";
// import Marquee from "react-fast-marquee";
// import { aboutMe } from "../constants";
import { useState } from "react";

const About = () => {
  const [currentImage, setCurrentImage] = useState("/shrestha-site/Me.jpg");

  const handleImageClick = () => {
    if (currentImage === "/shrestha-site/Me2.jpg") {
      setCurrentImage("/shrestha-site/Me.jpg");
    } else {
      setCurrentImage("/shrestha-site/Me2.jpg");
    }
  };

  return (
    <section id="About" className="container">
      <div className="general-header">About Me</div>
      <div className="about-box">
        <div className="text">
          <h1 className="my-name">Alex Shrestha</h1>
          <div className="about-me">
            <p>
              I&apos;m an undergraduate student at{" "}
              <span className="bolded-1">The University of Maryland, College Park</span>, studying{" "}
              <span className="bolded-1">Computer Science</span> with a minor in Economics. I&apos;m
              also part of the <span className="bolded-1">Cybersecurity (ACES) Honors College</span>.
              Driven with passion about learning, I aim to develop meaningful
              solutions and push the boundaries of what&apos;s possible by
              blending structured coding with innovative problem-solving. Check
              out my{" "}
              <a
                className="resume"
                href="public/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </a>.
            </p>
            <br />
            <h3 className="bolded-1">Experiences:</h3>
            <ul>
              <li>👨‍💻 SWE Intern @ Northrop Grumman</li>
              <li>👨‍💻 Engineer @ US News App Dev Team</li>
              <li>👨‍💻 Product Management Fellow @ Product Space</li>
            </ul>
            <br />
            <h3 className="bolded-1">Random Interests:</h3>
            <p>
              🦇👨 | 🏈 | 🐦🟣 | 🏀👑 | 🎬 | 💪🏋️‍♂️ | 🎮🕹️ | 🥩 | 🍣 | 💻 | 🛏️💤
            </p>
          </div>
        </div>
        <div className="photo" onClick={handleImageClick}>
          <img src={currentImage} alt="Photo of Me" className="profile-photo" />
        </div>
        {/* <Marquee speed={50} pauseOnHover>
          {likes.map((img, index) => (
            <div key={index} className="marquee-item">
              <img
                src={`../../icons/images/${img}.png`}
                alt={`${index}`}
                className="marquee-img"
              />
              <div className="image-caption">{img}</div>  
            </div>
          ))}
        </Marquee> 
        also fix the captions of this too if needed
        */}
      </div>
    </section>
  );
};

export default About;
