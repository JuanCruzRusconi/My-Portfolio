import { FormattedMessage } from "react-intl";
import Title from "../Title/Title";
import skills from "../../db/skills.json";
import './Skills.css';

const Skills = () => {

    let title = "SKILLS.";
    let subtitle = "My skills.";

    return (
        <>
            <div>
                <Title
                    title={
                        <FormattedMessage
                            id="title.skills"
                            defaultMessage={title}
                        />
                    }
                    subtitle={
                        <FormattedMessage
                            id="subtitle.skills"
                            defaultMessage={subtitle}
                        />
                    }
                />
            </div>
            <div className="skills-container">
                <div className="skills-section-container">
                    <h3 className="skills-title">
                        <FormattedMessage
                            id="skills.technologies"
                            defaultMessage="TECHNOLOGIES"
                        />
                    </h3>
                    {skills.technologies.map(skill => (
                        <div key={skill.id} className="skills-items">
                            <img className="skills-icon-item" src={skill.image} alt={skill.title} />
                            <h4 className="skills-icon-text">{skill.title}</h4>
                        </div>
                    ))}
                </div>
                <div className="skills-section-container">
                    <h3 className="skills-title">
                        <FormattedMessage
                            id="skills.tools"
                            defaultMessage="TOOLS"
                        />
                    </h3>
                    {skills.tools.map(skill => (
                        <div key={skill.id} className="skills-items">
                            <img className="skills-icon-item" src={skill.image} alt={skill.title} />
                            <h4 className="skills-icon-text">{skill.title}</h4>
                        </div>
                    ))}
                </div>
                <div className="skills-section-container">
                    <h3 className="skills-title">
                        <FormattedMessage
                            id="skills.data"
                            defaultMessage="DATA"
                        />
                    </h3>
                    {skills.data.map(skill => (
                        <div key={skill.id} className="skills-items">
                            <img className="skills-icon-item" src={skill.image} alt={skill.title} />
                            <h4 className="skills-icon-text">{skill.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )

}

export default Skills;