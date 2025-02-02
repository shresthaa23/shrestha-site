import { useState } from "react";
import { projects } from "../../constants";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
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
        <div className="project-box">
            <div className="slider">
                <FaArrowLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowRight className="right-arrow" onClick={nextSlide} /> 
                {projects.map((project, index) => (  
                    <div key={index} className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (
                            <img src={`${project.title}`} alt={project.description} className="image" /> 
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ImageSlider;
