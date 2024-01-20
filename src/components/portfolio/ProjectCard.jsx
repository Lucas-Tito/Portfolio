import "./project_card.css"
import github_icon from "../../images/github.svg"
import demo_icon from "../../images/demo_icon.svg"

export default function ProjectCard(props){

    var lastHoveredPicture
    const handlePictureHover = event =>{
        //gets the project picture hovered
        let picture = document.querySelector(`#${event.currentTarget.id} img`)
        lastHoveredPicture = picture

        //gets the amount of pixels to scroll until the bottom
        let pixelsToScroll = picture.clientHeight - 310 //310 is the height of the image card
        
        /**
         * if the project image doesn't have enought height, 
         * then adjust the "project_picture" div to the image height
         */
        if(pixelsToScroll<0){
            let pictureDiv = document.querySelector(`#${event.currentTarget.id}`)
            pictureDiv.style.height = `${picture.clientHeight}px`;
            pictureDiv.style.maxWidth = `${picture.clientHeight*(16/9)}px`;
        }
        else{
            //scrolls the image to the bottom
            picture.style.transform = `translateY(${-pixelsToScroll}px)`
        }
    }

    const handlePictureLeave = event =>{
        lastHoveredPicture.style.transform = `translateY(0%)`
    }

    return(
        <>
            <div className="project_card">

                <div className="project_picture" onMouseEnter={handlePictureHover} onMouseLeave={handlePictureLeave} id={props.id}>
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
                        <div onClick={()=>window.location.href = (props.github_link)}>
                            <span>Code</span>
                            <img src={github_icon}/>
                        </div>
                        
                            {props.demo_link.length===0 //checks if there is a demo
                                ?<div></div>

                                :   <div onClick={()=>window.location.href = (props.demo_link)}>
                                        <span>Live Demo</span>
                                        <img src={demo_icon}/>
                                    </div> 
                            }
                        
                    </div>
                </div>

            </div>
        </>
    )
}