import { motion } from "framer-motion";
import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <section id="Hero" className={styles.container}>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.heroContent}>
        <div className={styles.heroHeader}> Hey, I&apos;m Alex. </div>
        <p className={styles.heroSubheader}> I code and do other things <br/>(including updating this soon) </p>
      </motion.div>
    </section>
  );
};

export default Hero;
