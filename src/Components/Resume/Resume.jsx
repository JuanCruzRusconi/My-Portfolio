import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { langContext } from "../../context/langContext.jsx";
import Title from "../Title/Title";
import resumeImageEn from "../../assets/CV-IT-JuanCruzRusconi-English.jpg";
import resumeImageEs from "../../assets/CV-IT-JuanCruzRusconi-Spanish.jpg";

import "./Resume.css";

const Resume = () => {

    const { locale } = useContext(langContext)

    let title = "RESUME.";
    let subtitle = "My recent resume.";
    let buttonEn = "Download CV";
    let buttonEs = "Descargar CV";

    return (

        <>
            <Title 
                title={
                    <FormattedMessage 
                        id="title.resume"
                        defaultMessage={title}
                    />
                }
                subtitle={
                    <FormattedMessage 
                        id="subtitle.resume"
                        defaultMessage={subtitle}
                    />
                }
            />
            <div className="resume-container">
                <div className="resume-image-container">
                    <img className="resume-image" src={locale === 'en-us' ? resumeImageEn : resumeImageEs} alt="resume" />
                </div>
                <div className="button-download-container">
                    {locale === 'en-us' ?
                        <button className="button-download">
                            <a className="link" href='/CV-IT-JuanCruzRusconi-English.pdf' download={''} target="_blank">
                                <FormattedMessage
                                    id="resume.download.button"
                                    defaultMessage={buttonEn}
                                />
                            </a>
                        </button>
                        :
                        <button className="button-download">
                            <a className="link" href='/CV-IT-JuanCruzRusconi-Spanish.pdf' download={''} target="_blank">
                                <FormattedMessage
                                    id="resume.download.button"
                                    defaultMessage={buttonEs}
                                />
                            </a>
                        </button>
                    }       
                </div>
            </div>
        </>
        
    )
}

export default Resume;