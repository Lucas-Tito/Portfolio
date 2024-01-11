import "./project_card.css"
import github_icon from "../../images/github.svg"
import demo_icon from "../../images/demo_icon.svg"

export default function ProjectCard(props){
    return(
        <>
            <div className="project_card">

                <div className="project_picture">
                    <img src={props.picture}/>
                </div>
                

                <div className="project_info">
                    <div className="project_title">
                        <span className="project_name">{props.name}</span>
                        <span className="project_date">({props.date})</span>
                    </div>

                    <span className="project_description">{props.description}</span>

                    <div className="project_tech">
                        
                            {props.tech.map((tech) =>(
                                <div>
                                    <span>{tech}</span>
                                </div>
                            ))}
                          
                    </div>
                    
                    <div className="project_code">
                        <div>
                            <span>Code</span>
                            <img src={github_icon}/>
                        </div>
                        <div>
                            <span>Live Demo</span>
                            <img src={demo_icon}/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}