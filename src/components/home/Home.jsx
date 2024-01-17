import "./home.css"
import github_icon from "../../images/github.svg"
import linkedin_icon from "../../images/linkedin.svg"
import youtube_icon from "../../images/youtube.svg"
import lucas from "../../images/foto_profissional.jpg"
import html_icon from "../../images/./tech/html.svg"
import css_icon from "../../images/./tech/css.svg"
import js_icon from "../../images/./tech/js.svg"
import react_icon from "../../images/./tech/react.svg"
import node_icon from "../../images/./tech/node.svg"
import java_icon from "../../images/./tech/java.svg"

export default function Home(){

    return(
        <>
            <div className="main" id="home">
                <div className="text">
                    <span className="primary">Junior Developer 👋🏻</span>
                    <span className="secondary">
                        Greetings, I'm Lucas Tito. A student in Software Engineering at Universidade Federal do Ceará. 🎓
                    </span>

                    <div className="links">
                        <img src={linkedin_icon} onClick={()=>window.location.href = ("https://www.linkedin.com/in/lucas-tito-530997211/")}/>

                        <img src={github_icon} onClick={()=>window.location.href = ("https://github.com/Lucas-Tito")}/>

                        <img src={youtube_icon} onClick={()=>window.location.href = ("https://www.youtube.com/@lucastitosampaio")}/>
                    </div>

                    <div className="tech">
                        <span>Tech Stack |</span>
                        <div className="imgs">
                            <div className="tech_group">
                                <img src={html_icon} />
                                <img src={css_icon} />
                            </div>
                            
                            <div className="tech_group">
                                <img src={js_icon} />
                                <img src={react_icon} />
                                <img src={node_icon} />
                            </div>
                            
                            <div className="tech_group">
                                <img src={java_icon} />
                            </div>
                        </div>
                    </div>
                </div>

                <img src={lucas} className="lucas" />
            </div>
        </>
    )
}