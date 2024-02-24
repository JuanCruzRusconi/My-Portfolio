import Title from "../Title/Title";
import resumeImage from "../../../public/CV-JuanCruzRusconi-English.pdf";

import "./Resume.css";

const Resume = () => {

    let title = "Resume.";
    let subtitle = "My recent resume.";

    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <div className="resume-container">
                <div className="resume-image-container">
                    <img className="resume-image" src={resumeImage} alt="resume" />
                </div>
                <div className="button-download-container">
                    <button className="button-download">
                        <a className="link" href='./CVEnglish' download={''} target="_blank">
                            Download CV English
                        </a>
                    </button>
                    <button className="button-download">
                        <a className="link" href='./CVSpanish' download={''} target="_blank">
                            Download CV Spanish
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Resume;