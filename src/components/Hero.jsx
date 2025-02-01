import { motion } from "framer-motion";
import '../styles/hero-styles.css';

const Hero = () => {
  return (
    <section id="Hero" className="container">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hero-content">
        <div className="hero-header"> Hey, I&apos;m Alex. </div>
        <p className="hero-subheader"> I code and stuff. This is a work in progress! </p>
      </motion.div>
    </section>
  );
};

export default Hero;
