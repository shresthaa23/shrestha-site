import styles from "../styles/about.module.css";
// import Marquee from "react-fast-marquee";
// import { aboutMe } from "../constants";
// import { useState } from "react";

const About = () => {
  // const [currentImage, setCurrentImage] = useState(`Me.jpg`);

  // const handleImageClick = () => {
  //   setCurrentImage((prevImage) =>
  //     prevImage === `Me2.jpg`
  //       ? `Me.jpg`
  //       : `Me2.jpg`
  //   );
  // };
  
  return (
    <section id="About" className={styles.container}>
      <div className={styles.generalHeader}>About Me</div>
      <div className={styles.aboutBox}>
        <div className={styles.text}>
          <h1 className={styles.myName}>Alex Shrestha</h1>
          <div className={styles.aboutMe}>
            <p>
              I&apos;m a junior <span className={styles.bolded}>Computer Science</span> student at{" "}
              <span className={styles.bolded}>The University of Maryland, College Park</span> with a minor in Economics. I&apos;m passionate about <span className={styles.bolded}>software development</span> with direct experience in full-stack development, low-level projects, and research. I&apos;ve also become interested in <span className={styles.bolded}>quantum computing</span> and its real-world applications. I&apos;m driven to continously learn, develop impactful solutions and push the boundaries of technology. Check out my{" "}
              <a
                className={styles.resume}
                target="_blank"
                href={`${import.meta.env.BASE_URL}Alex_Shrestha_Resume.pdf`}
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
            </ul>
            <br />
            <h3 className={styles.bolded}>Random Interests:</h3>
            <p>
              🦇👨 | 🏈 | 🐦🟣 | 🏀👑 | 🎬 | 💪🏋️‍♂️ | 🎮🕹️ | 🥩 | 🍣 | 💻 | 🛏️💤
            </p>
            {/* <h3 className={styles.bolded}>Relevant Classes:</h3>
            <ul>
              <li>👨‍💻 Advanced Data Structures</li>
              <li>👨‍💻 Algorithms</li>
              <li>👨‍💻 Operating Systems</li>
              <li>👨‍💻 Quantum Computing</li>
              <li>👨‍💻 Quantum Information Science</li>
              <li>👨‍💻 Quantum Algorithms</li>
              <li>👨‍💻 Quantum Communication</li>
              <li>👨‍💻 Quantum Cryptography</li>
            </ul> */}
          </div>
        </div>
        <div className={styles.photo}>
          <img src={"Me.jpg"} alt="Photo of Me" className={styles.profilePhoto} />
        </div>
      </div>
    </section>
  );
};

export default About;
