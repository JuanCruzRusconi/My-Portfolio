import { FormattedMessage } from "react-intl";
import Title from "../Title/Title";
import resumeImage from "../../assets/CV-IT-JuanCruzRusconi-English.jpg";

import "./Resume.css";

const Resume = () => {

    let title = "RESUME.";
    let subtitle = "My recent resume.";

    return (

        <>
            <Title 
                title={
                    <FormattedMessage 
                        id="title.resume.first"
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="title.resume.second"
                    />
                }
            />
            <div className="resume-container">
                <div className="resume-image-container">
                    <img className="resume-image" src={resumeImage} alt="resume" />
                </div>
                <div className="button-download-container">
                    <button className="button-download">
                        <a className="link" href='/CV-IT-JuanCruzRusconi-English.pdf' download={''} target="_blank">
                            <FormattedMessage id="resume.download-button.english" />
                        </a>
                    </button>
                    <button className="button-download">
                        <a className="link" href='/CV-IT-JuanCruzRusconi-Spanish.pdf' download={''} target="_blank">
                        <FormattedMessage id="resume.download-button.spanish" />
                        </a>
                    </button>
                </div>
            </div>
        </>
        
    )
}

export default Resume;