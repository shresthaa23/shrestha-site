import styles from "../styles/about.module.css";
// import Marquee from "react-fast-marquee";
// import { aboutMe } from "../constants";
import { useState } from "react";

const About = () => {
  const [currentImage, setCurrentImage] = useState(`Me.jpg`);

  const handleImageClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === `Me2.jpg`
        ? `Me.jpg`
        : `Me2.jpg`
    );
  };
  
  return (
    <section id="About" className={styles.container}>
      <div className={styles.generalHeader}>About Me</div>
      <div className={styles.aboutBox}>
        <div className={styles.text}>
          <h1 className={styles.myName}>Alex Shrestha</h1>
          <div className={styles.aboutMe}>
            <p>
              I&apos;m an undergraduate student at{" "}
              <span className={styles.bolded}>The University of Maryland, College Park</span>, studying{" "}
              <span className={styles.bolded}>Computer Science</span> with a minor in Economics. I&apos;m
              also part of the <span className={styles.bolded}>Cybersecurity (ACES) Honors College</span>.
              I&apos;m driven with a passion to learn, develop meaningful solutions and push the boundaries of what&apos;s possible by combining logical coding and innovative problem-solving. Check
              out my{" "}
              <a
                className={styles.resume}
                target="_blank"
                href={`${import.meta.env.BASE_URL}Resume_Summer_2025.pdf`}
                rel="noopener noreferrer"
              >
                resume
              </a>!
            </p>
            <br />
            <h3 className={styles.bolded}>My Experiences:</h3>
            <ul>
              <li>👨‍💻 SWE Intern @ Leidos, Northrop Grumman, Dalex Softworks</li>
              <li>👨‍💻 Engineer @ US News UMD App Dev Team</li>
              <li>👨‍💻 Cybersecurity Researcher @ Breakerspace UMD</li>
              <li>👨‍💻 Product Management Fellow @ Product Space</li>
            </ul>
            <br />
            <h3 className={styles.bolded}>Random Interests:</h3>
            <p>
              🦇👨 | 🏈 | 🐦🟣 | 🏀👑 | 🎬 | 💪🏋️‍♂️ | 🎮🕹️ | 🥩 | 🍣 | 💻 | 🛏️💤
            </p>
          </div>
        </div>
        <div className={styles.photo} onClick={handleImageClick}>
          <img src={currentImage} alt="Photo of Me" className={styles.profilePhoto} />
        </div>
        {/* <Marquee speed={50} pauseOnHover>
          {likes.map((img, index) => (
            <div key={index} className={styles.marquee-item}>
              <img
                src={`../../icons/images/${img}.png`}
                alt={`${index}`}
                className={styles.marquee-img}
              />
              <div className={styles.image-caption}>{img}</div>  
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
