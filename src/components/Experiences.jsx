import { experiences } from "../constants";
import styles from "../styles/experience.module.css";
import { useState } from "react";

const Experiences = () => {
  // Split experiences into first 3 and last 2
  const firstThree = experiences.slice(0, 3);
  const lastTwo = experiences.slice(3, 5);

  return (
    <section id="Experiences" className={styles.container}>
      <div className={styles.generalHeader}>Experience</div>
      
      {/* First row - first 3 experiences */}
      <div className={`${styles.experienceGrid} ${styles.topRow}`}>
        {firstThree.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
      
      {/* Second row - last 2 experiences */}
      <div className={`${styles.experienceGrid} ${styles.bottomRow}`}>
        {lastTwo.map((exp, i) => (
          <ExperienceCard key={i + 3} {...exp} />
        ))}
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function ExperienceCard({ company, role, date, description, logo, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleClick}
    >
      <div className={styles.flipCardInner}>
        {/* Front of the card - Image, Role, Timeline */}
        <div className={styles.flipCardFront}>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.externalLink}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className={styles.externalLinkIcon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          <div className={styles.cardHeader}>
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className={styles.logo}
              onError={(e) => {
                console.error(`Failed to load image: ${logo}`);
                console.error('Error details:', e);
              }}
              onLoad={() => {
                console.log(`Successfully loaded image: ${logo}`);
              }}
            />
            <div>
              <h3 className={styles.role}>{role}</h3>
            </div>
          </div>
          <p className={styles.timeline}>{date}</p>
        </div>
        
        {/* Back of the card - Full details */}
        <div className={styles.flipCardBack}>
          <div>
            <h3 className={styles.companyName}>{company}</h3>
            <p className={styles.role}>{role}</p>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}


export default Experiences;
