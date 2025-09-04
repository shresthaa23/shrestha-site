import { motion } from "framer-motion";
import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.shootingStar}></div>
        <div className={styles.shootingStarsContainer}>
        {Array.from({ length: 10 }).map((_, i) => {
          // random top position (vh units so it scales with screen height)
          const top = Math.random() * 100;
          // random delay between 0–8s
          const delay = Math.random() * 8;
          // random duration (speed)
          const duration = 6 + Math.random() * 4; // between 6–10s

          return (
            <div
              key={i}
              className="styles.shootingStar"
              style={{
                top: `${top}vh`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>


      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.heroContent}>
        <div className={styles.heroHeader}> Hey, I&apos;m Alex. </div>
        <p className={styles.heroSubheader}> I code and do other things </p>
      </motion.div>

    </section>
  );
};

export default Hero;
