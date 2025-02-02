import '../styles/contact-styles.css';
import { Linkedin, Github, Facebook } from './icons';

const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <h1 className="header">Reach Out</h1>

      <div className="socialGroup">
        <h2 className="contact-sub">Email</h2>
        <div id="email-container"><a href="mailto:ashrest6@terpmail.umd.edu.com">ashrest6@terpmail.umd.edu</a></div>
      </div>

      <div className="socialGroup">
        <h2 className="contact-sub">Social Media</h2>
        <div className="icons" id="icons">
          <a href="https://www.linkedin.com/in/shrestha2023/" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="https://github.com/shresthaa23/" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><Facebook /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;