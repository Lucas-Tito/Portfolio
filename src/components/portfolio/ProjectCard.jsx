import "./project_card.css"
import github_icon from "../../images/github.svg"
import demo_icon from "../../images/demo_icon.svg"

export default function ProjectCard(props){

    const handlePictureHover = () =>{

        let picture = document.querySelectorAll(".project_card_picture")
        picture.forEach(picture => {
            let pixelsToScroll = picture.clientHeight - 310 //310 is the height of the image card
            console.log(pixelsToScroll);
            picture.style.transform = `translateY(${-pixelsToScroll}px)`
        });
        
        
    }

    return(
        <>
            <div className="project_card">

                <div className="project_picture" onMouseEnter={handlePictureHover}>
                    <img src={props.picture} className="project_card_picture"/>
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