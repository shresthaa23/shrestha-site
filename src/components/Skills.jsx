import "../styles/skills-styles.css";
import { technologies } from "../constants";
import BallCanvas from "./Ball";

const Skills = () => {
  return (
    <section id="Skills" className="container">
      <div className="general-header"> Skills </div>
        <div className="technologies-container">
          {technologies.map((technology) => (
            <div className="technology-item" key={technology.name}>
              <BallCanvas icon={technology.icon} label={technology.name} />
            </div>
          ))}
        </div>
    </section>
  );
};

export default Skills;
