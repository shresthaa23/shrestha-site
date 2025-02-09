import styles from "../styles/skills.module.css";
import { technologies } from "../constants";
import BallCanvas from "./Ball";

const Skills = () => {
  return (
    <section id="Skills" className={styles.container}>
      <div className={styles.generalHeader}> Skills </div>
        <div className={styles.technologiesContainer}>
          {technologies.map((technology) => (
            <div className={styles.technologyItem} key={technology.name}>
              <BallCanvas icon={technology.icon} label={technology.name} />
            </div>
          ))}
        </div>
    </section>
  );
};

export default Skills;
