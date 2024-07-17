import "./Title.css";

const Title = (props) => {

    const { title, subtitle } = props;
    
    return (

        <div>
            <h2 className="title-container">
                {title}
            </h2>
            <h3 className="subtitle-container">
                {subtitle}
            </h3>
        </div>
        
    )
}

export default Title;