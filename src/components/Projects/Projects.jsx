import styles from "../../styles/project.module.css";
import ImageSlider from "./ImageSlider";

const Projects = () => {
  return (
    <section id="Projects" className={styles.container}>
      <div className={styles.generalHeader}>Projects</div>
      <ImageSlider />
    </section>
  );
};

export default Projects;
