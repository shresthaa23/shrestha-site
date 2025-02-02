import { useState } from "react";
import { projects } from "../../constants";
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import "../../styles/project-styles.css";

const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const length = projects.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null;
    }

    return (
        <div className="slider-container">            
            <FaArrowLeft className="left-arrow" onClick={prevSlide} />
            <div className="project-box">
                <div className="slider">
                    {projects.map((project, index) => (  
                        <div key={index} className={index === current ? 'slide active' : 'slide'}>
                            {index === current && (
                            <>
                                <img src={`${project.title}`} alt={project.description} className="image"/>
                                <div className="overlay">
                                    <p className="title">hiii</p>
                                    <p className="description">asdf</p>
                                    <p className="languages">dfgh</p>
                                    {/* <p className="code">ghjk</p> */}
                                    <a href="https://google.com" target="_blank" rel="noreferrer" className="code">
                                        <FaExternalLinkAlt size="1.5rem" />
                                    </a>
                                    {/* title -- description - langugaes - code link ideally */}
                                </div>
                            </>          
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <FaArrowRight className="right-arrow" onClick={nextSlide} /> 
        </div>
    );
};


export default ImageSlider;
